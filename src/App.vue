<template>
  <div id="app" class="background">
    <router-view />
  </div>
</template>

<style lang="scss">
  * {
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    list-style: none;
  }

  body {
    font-family: Oracle-regular, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    color: #1A1816;
    background: #F1F0EB;
    line-height: 1.3;
  }

  @font-face {
    font-family: 'Oracle-bold';
    src: url("~@/assets/fonts/OracleSans-Bd.woff2");
  }
  @font-face {
    font-family: 'Oracle-regular';
    src: url("~@/assets/fonts/OracleSans-Rg.woff2");
  }
  @font-face {
    font-family: 'Oracle-sbold';
    src: url("~@/assets/fonts/OracleSans-SBd.woff2");
  }
  @font-face {
    font-family: 'Oracle-italic';
    src: url("~@/assets/fonts/OracleSans-SBdIt.woff2");
  }

    // SASS FUNCTION TO CONVERT PX INTO REM

  // Defining base font size
  // The default font size for html is 16px
  $base-size: 16;
  //Function to convert px value into rem
  //You can replace rem with any other value you want (rem is most preferred value for web)
  @function size($target, $context: $base-size) {
    @return ($target / $context) * 1em;
  }

  .background {
    z-index: 0;
    &:before {
      content: "";
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-image: url('~@/assets/sso-f17v2-bgimg.jpg') !important;
      background-position: 58% 20% !important;
      background-repeat: no-repeat !important;
      background-size: cover;
      background-attachment: fixed !important;
      height: 100% !important;
      z-index: 0;
      animation: imgFade 0.5s 0s 1 cubic-bezier(0, 0, 0.2, 1) forwards;
    }
  }

@keyframes imgFade {
  0% {
    opacity: 0;
  };
  100% {
    opacity: 1;
  }
}

  @media (max-width: 500px), (max-height: 620px) {
    html {
      font-size: 87%;
    }

    .background {
      z-index: 0;
    }
    .background::before {
      background: #F8F7F4 !important;
      animation: imgFade 0s 0s 1 ease forwards;
    }
  }

</style>
