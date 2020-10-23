<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Infos</router-link> | 
      <router-link to="/1">Intro</router-link> | 
      <router-link to="/2">Reveil</router-link> | 
      <router-link to="/3">Se Lever</router-link> | 
      <router-link to="/3bis">Snooze</router-link> | 
      <router-link to="/4">Ne Pas Se Doucher</router-link> | 
      <router-link to="/4bis">Se Doucher</router-link> |
      <router-link to="/5">Marcher</router-link> | 
      <router-link to="/5bis">Métro</router-link> |
      <router-link to="/6">Bon Chemin</router-link> | 
      <router-link to="/6bis">Manif</router-link> | 
      <router-link to="/7">Constat</router-link> |
      <router-link to="/8">Fin</router-link> |
      <router-link to="/9">Stat</router-link> 
    </div> -->
    <transition name="fade">
    <router-view/>
    </transition>
  </div>
</template>

<style scoped lang="scss">

@font-face {
  font-family: "DIN-BoldAlternate";
  src: url("./assets/fonts/DINAlternateBold.woff") format("woff"), 
    url("./assets/fonts/DINAlternateBold.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}

#app {
  font-family: "DIN-BoldAlternate";
  margin: 0;
  text-align: center;
  color: #2c3e50;
  background-color: #3a6d57 ;
  width: 100%;
  height: 100vh;
}

#nav {
  padding: 30px;
  position: fixed;
  top:0;
  width: 100%;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #24b784;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
<script>

export default {
    mounted(){
    }
}
</script>
