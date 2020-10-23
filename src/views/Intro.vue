<template >
  <div class="intro" id="intro">
      <h1>Tente d'arriver à l'heure !</h1>
      <h2>Les cours commencent bientôt</h2>
      <router-link tag="a" to="/2"><img src="../assets/play.png" alt=""></router-link> 
      <img class="bonhomme" src="../assets/bonhomme.png" alt="">
  </div>
</template>
<script>

import router from '../router'

export default {
    mounted(){
    }
}

</script>
<style lang="scss" scoped>
.intro {
    margin: 0;
    width: 100%;
    height: 100vh; 
    display: flex;
    flex-direction: column;
}

h1 {
      margin: auto;
      margin-bottom: 0;
      font-size: 3rem;
      text-transform: uppercase;
      color: #24b784;
      z-index: 2;
    }

    h2 {
      margin: auto;
      margin-top: 1%;
      font-size: 2rem;
      color: #24b784;
      z-index: 2;
    }

    a {
      position: absolute;
      top: 80%; 
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 30px;
    }

    a img {
      margin: auto;
      height: 80px;
      transition: all .5s cubic-bezier(.21,.84,1,1);
    }

    a:hover img {
      transform: rotate(360deg);
      filter: drop-shadow(0 10px 10px rgba(0, 0, 0, .4));
    }

    .bonhomme{
      position: absolute;
      bottom: -20px;
      right: 100px;
      height: 300px;
    }
</style>