<template>
  <div class="appBody">
    <header>
      <h1>A Taste of Italy</h1>
    </header>
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link> <span>|</span>
      <router-link :to="{ name: 'Menu' }">Menu</router-link> <span>|</span>
      <router-link :to="{ name: 'Order' }">Order</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.cdnfonts.com/css/snell-roundhand');

header {
    margin: 10px auto;
    text-align: center;
}

header h1 {
    color: white;
    font-size: 6rem;
    font-family: 'Snell Roundhand', sans-serif;
}

nav {
  overflow: hidden;
  text-align: center;
  margin-bottom: 20px;
  filter: drop-shadow(0px 0px 50px #000);
}

a {
  font-weight: bold;
  text-decoration: none;
  color: #ddd;
  font-size: 2rem;
  margin: 0px 10vw;
}

.appBody {
  background-image: url('https://images.squarespace-cdn.com/content/v1/602833744a96866dbf7ed823/1613785053618-26RRLU2BJOQ29U15TZ0E/SecretSupper_WinePairingRecipes_CacioePepe_003_LR_photocredit_CarlyDiaz.jpg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;

  /* following code taken from https://stackoverflow.com/a/34702639/21643912 and modified for this project */    
  &:before {
    content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
      opacity: .5; 
      z-index: -1;
  }
}

#app {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: white;
  text-decoration: underline;
}

span {
  color: white;
}
</style>
