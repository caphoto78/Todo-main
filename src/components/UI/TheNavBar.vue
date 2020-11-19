<template>
  <nav>
    <ul :class="[isActive ? 'active' : '', 'nav-menu']">
      <li class="logo"><a href="http://oracle.com" target="_blank" rel="noopener noreferrer"><img src="~@/assets/logo_oracle.gif" alt="logo"></a></li>
      <li class="item"><a class="name">My Cool App</a> </li>
      <li class="item"><a><i class="fas fa-user"></i></a></li>
      <li class="item"><a>Welcome, { Username }</a></li>
      <li @click="toggleSubmenu"
          :class="[submenuActive ? 'submenu-active' : '', 'item']"
          >
        <a tabindex="0"><i class="fas fa-caret-down"></i></a>
        <ul class="submenu">
          <li class="subitem"><router-link to="/signin">Logout</router-link></li>
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
  color: #333333;
}
.nav-menu, .submenu {
  list-style-type: none;
}
.logo {
  padding: 10px;
}
.item {
  padding: 10px;
}

.item a:hover {
    color: black;
}

  /* Mobile menu */

  .nav-menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  .nav-menu li a {
    display: block;
    padding: 15px 5px;
  }
  .nav-menu li.subitem a {
    padding: 15px;
  }
  .logo {

  }
  .toggle {
      text-align: right;
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

  /* Tablet menu */
@media all and (min-width: 700px) {
    .nav-menu {
        justify-content: center;
    }
    .logo {
        flex: 1;
    }
    .toggle {
        flex: 1;
        text-align: right;
        order: 2;
    }
}

/* Desktop menu */
@media all and (min-width: 960px) {
    .name {
      font-family: Oracle-bold;
      color: #6A9D67;
      font-size: 18px;
    }
    .nav-menu {
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
    .submenu-active .submenu {
        display: block;
        position: absolute;
        right: 0;
        top: 68px;
        background: white;
    }
    .toggle {
        display: none;
    }
    .submenu-active {
        border-radius: 0;
    }
}
</style>