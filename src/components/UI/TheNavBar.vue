<template>
  <!-- <div class="container">
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
  </div> -->
  <nav>
    <ul :class="[isActive ? 'active' : '', 'nav-menu']">
      <li class="logo"><a><img src="~@/assets/logo_oracle.gif" alt="logo"></a></li>
      <li class="item"><a>My Cool App</a> </li>
      <li class="item"><a><i class="fas fa-user"></i></a></li>
      <li class="item"><a>Welcome, { Username }</a></li>
      <li @click="toggleSubmenu"
          :class="[submenuActive ? 'submenu-active' : '', 'item']"
          >
        <a tabindex="0"><i class="fas fa-caret-down"></i></a>
        <ul class="submenu">
          <li class="subitem"><a href="#">Logout</a></li>
        </ul>
      </li>
      <li @click="toggleMenu" v-if="!isActive" class="toggle"><a href="#"><i class="fas fa-bars"></i></a></li>
      <li @click="toggleMenu" v-if="isActive" class="toggle"><a href="#"><i class="fas fa-times"></i></a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "the-nav-bar",
  data() {
    return {
      isActive: false,
      submenuActive: false,
    }
  },
  computed: {

  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
    },
    toggleSubmenu() {
      this.submenuActive = !this.submenuActive;
    }
  },
}
</script>

<style lang="scss" scoped>
nav {
    background: #FCFBFA;
    padding: 0 15px;
}
a {
  text-decoration: none;
  color: black;
}
.menu, .submenu {
  list-style-type: none;
}
.logo {
  padding: 10px;
}
.item {
  padding: 10px;
}

@media (max-width: 500px), (max-height: 620px) {
  .menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  .menu li a {
    display: block;
    padding: 15px 5px;
  }
  .menu li.subitem a {
    padding: 15px;
  }
  .toggle {
      order: 1;
      font-size: 20px;
  }
  .item {
      order: 2;
      width: 100%;
      text-align: center;
      display: none;
  }
  .active .item {
      display: block;
  }
  .button.secondary { /* divider between buttons and menu links */
      border-bottom: 1px #444 solid;
  }

  //Submenu
  .submenu {
    display: none;
  }
  .submenu-active .submenu {
    display: block;
  }
  .subitem a {
      padding: 10px 15px;
  }
  .submenu-active {
      background-color: white;
      border-radius: 3px;
  }
}
  /* Tablet menu */
@media all and (min-width: 700px) {
    .menu {
        justify-content: center;
    }
    .logo {
        flex: 1;
    }
    .item.button {
        width: auto;
        order: 1;
        display: block;
    }
    .toggle {
        flex: 1;
        text-align: right;
        order: 2;
    }
    /* Button up from tablet screen */
    .menu li.button a {
        padding: 10px 15px;
        margin: 5px 0;
    }
    .button a {
        background: #0080ff;
        border: 1px royalblue solid;
    }
    .button.secondary {
        border: 0;
    }
    .button.secondary a {
        background: transparent;
        border: 1px #0080ff solid;  
    }
    .button a:hover {
        text-decoration: none;
    }
    .button:not(.secondary) a:hover {
        background: royalblue;
        border-color: darkblue;
    }
}

/* Desktop menu */
@media all and (min-width: 960px) {
    .menu {
        align-items: flex-start;     
        flex-wrap: nowrap;
        background: none;
    }
    .logo {
        order: 0;
    }
    .item {
        order: 1;
        position: relative;
        display: block; 
        width: auto;
    }
    .button {
        order: 2;
    }
    .submenu-active .submenu {
        display: block;
        position: absolute;
        left: 0;
        top: 68px;
        background: #111;
    }
    .toggle {
        display: none;
    }
    .submenu-active {
        border-radius: 0;
    }
}


  // .container {
  //   position: relative;
  // }
  // .navbar {
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   height: 60px;
  //   background-color: #FCFBFA;
  //   min-width: 640px;
  // }

  // .nav-left {
  //   display: flex;
  //   align-items: center;
  //   justify-content: flex-start;
  //   flex-wrap: nowrap;
  //   width: 50%;
    
  //   h3 {
  //     font-family: Oracle-bold;
  //     color: saddlebrown;
  //     font-size: 20px;
  //   }
  //   img {
  //     margin: 8px 20px 0 20px;
  //   }

  //   .inner {
  //     position: relative;
  //   }

  //   .nav-right {
  //     display: flex;
  //     flex-direction: row;
  //   }
  //   .item {
  //     justify-self: center;
  //   }
   
  //   // display: flex;
  //   //   flex-direction: row;
  //   //   flex-wrap: nowrap;
  // }
</style>