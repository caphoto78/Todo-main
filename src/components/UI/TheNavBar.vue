<template>
  <div class="container">
    <div class="navbar">
      <div class="nav-left">
        <a href="http://oracle.com" target="_blank" rel="noopener noreferrer"><img src="~@/assets/logo_oracle.gif" alt="logo"></a>
        
        <h3>My Cool App</h3>
      </div>
      <div class="nav-right">
          <div class="item">
            <i class="fas fa-user"></i>
          </div>
          <div class="item">
            <p class="item">Welcome, { Username }</p>
          </div>
          <div class="item">
            <i class="fas fa-caret-down"></i>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "the-nav-bar"
}
</script>

<style lang="scss" scoped>
  .container {
    position: relative;
  }
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background-color: #FCFBFA;
    min-width: 640px;
  }

  .nav-left {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
    width: 50%;
    
    h3 {
      font-family: Oracle-bold;
      color: saddlebrown;
      font-size: 20px;
    }
    img {
      margin: 8px 20px 0 20px;
    }

    .inner {
      position: relative;
    }

    .nav-right {
      display: flex;
      flex-direction: row;
    }
    .item {
      justify-self: center;
    }
   
    // display: flex;
    //   flex-direction: row;
    //   flex-wrap: nowrap;
  }
</style>