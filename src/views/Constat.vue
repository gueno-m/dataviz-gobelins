<template>
  <div class="container constat">
    <h2 ref="constat"></h2>

    <img class="mains" src="../assets/mains.png" alt="">
  </div>
</template>
<script>

import router from '../router'

export default {
    mounted(){  

      const constat = this.$refs.constat;
      let score = localStorage.getItem('score');
      
      if (score > 50) {
          constat.innerHTML = "Vous êtes juste, soyez à l'heure la prochaine fois !";
    } else  {         
          constat.innerHTML = "Vous êtes viré des Gobelins !";
      }
        setTimeout(function(){ router.push('/8'); }, 4000);
    }
}

</script>
<style lang="scss" scoped>

.constat h2{
    margin: auto;
    font-size: 3rem;
     color: #24b784;
}

.constat .mains {
    position: absolute;
    top: 65%; 
    left: 50%;
    transform: translate(-50%, -50%);
    height: 70px;
}

</style>