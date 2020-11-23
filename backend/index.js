const redis = require("redis")
const express = require("express")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bearerToken = require('express-bearer-token')
const sha1 = require('js-sha1')
const port = 8000
const uri = `http://localhost:${port}`
const secret = 'wadc43298923wufwuiasda-sadas'

const app = express()
app.use(express.json())
app.use(cors())
app.use(bearerToken())


var redisClient = redis.createClient()

// generez un token de login
function generateToken(username) {
    let data = {
        username: username
    }
    return jwt.sign(data, secret)
}
// verific ca utilizatorul este logat
// adica are un token valid
function verifyLogin(req, res) {
    try {
        jwt.verify(req.token, secret)
    } catch (err) {
        res.sendStatus(401)
        return false
    }
    return true
}

function getUsernameFromToken(req) {
    data = jwt.decode(req.token, secret)
    return data.username
}

function getTodosKey(username) {
    return username + '_todos'
}

// inregistreaza rutele

// sign-up
app.post("/user", (req, res) => {
    let user = req.body
    redisClient.get(user.username, (err, existingUser) => {
        if (existingUser !== null) {
            // user already exists
            res.sendStatus(409)
        }
        user.password = sha1(user.password)
        redisClient.set(user.username, JSON.stringify(user))
        res.sendStatus(200)
    })
})

app.get("/user/login", (req, res) => {
    let username = req.query.username
    let password = req.query.password

    redisClient.get(req.query.username, (err, data) => {
        if (data === null) {
            // user does not exist
            res.sendStatus(400)
            console.log('User does not exist')
            return
        }
        user = JSON.parse(data)
        console.log('test')
        if (user.password !== sha1(password)) {
            res.sendStatus(400)
            console.log('Bad password')
            return
        }
        res.status(200)
            .send({
                token: generateToken(username),
                username: user.username
            })
    })
})

app.post("/todos", (req, res) => {
    if (!verifyLogin(req, res)) {
        return
    }
    let todos = req.body
    username = getUsernameFromToken(req)
    todosKey = getTodosKey(username)
    redisClient.set(todosKey, JSON.stringify(todos), (err, response) => {
        res.sendStatus(200)
    })

})

app.get("/todos", (req, res) => {
    if (!verifyLogin(req, res)) {
        return
    }
    username = getUsernameFromToken(req)
    todosKey = getTodosKey(username)
    redisClient.get(todosKey, (err, data) => {
        todos = JSON.parse(data)
        res.status(200)
            .send(todos)
    })
})

app.delete("/todos/:id", (req, res) => {
    if (!verifyLogin(req, res)) {
        return
    }
    username = getUsernameFromToken(req)
    todosKey = getTodosKey(username)
    redisClient.del(todosKey, (err, data) => {
        if (err) {
            return reject(err);
          }
          return resolve(data);
    })
})

// porneste aplicatia server
app.listen(
    port, () => console.log(`Server started on ${uri}`)
)