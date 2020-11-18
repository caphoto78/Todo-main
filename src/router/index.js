import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/signup",
    name: "SignUp",
    // route level code-splitting
    // this generates a separate chunk (signup.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "sinup" */ "../views/SignUp.vue")
  },
  {
    path: "/signin",
    name: "SignIn",
    component: () =>
      import(/* webpackChunkName: "signin" */ "../views/SignIn.vue")
  },
  {
    path: "/todos",
    name: "Todos",
    component: () =>
      import(/* webpackChunkName: "todos" */ "../views/Todos.vue")
  },
  {
    path: "/todos/add",
    name: "AddTask",
    component: () =>
      import(/* webpackChunkName: "add" */ "../views/AddTask.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
