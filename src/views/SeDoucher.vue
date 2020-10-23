<template>
  <div class="container seDoucher">
    <h1 ref="nar"></h1>

    <div class="buttonsContainer" ref="buttonsContainer">
       <button v-on:click="score">Une petite marche, ça fait jamais de mal...</button>
       <router-link tag="a" to="/5bis">Go métro !</router-link>
    </div>
  </div>
</template>
<script>

export default {
  mounted(){

      const bouttons = this.$refs.buttonsContainer;
      const narration = this.$refs.nar; 

      setTimeout(function(){ narration.innerHTML = "Tu te permets de chanter sous la douche ?!"; }, 2000);

      setTimeout(function(){ narration.innerHTML = "C’est bien t’es propre mais en retard ..."; }, 5000);

      setTimeout(function(){ narration.innerHTML = "..."; }, 8500);

      setTimeout(function(){ narration.innerHTML = "Merde, ton vélo !!!"; }, 12500);
      
        setTimeout(function(){ bouttons.style.opacity = "1"; }, 12500);
    },
    methods: {
      score() {

        let score = localStorage.getItem('score');
        score = parseInt(score) + 25;
          localStorage.setItem('score', score.toString());

          this.$router.push('/5')
    }
  }
}

</script>
<style lang="scss" scoped>
.seDoucher {
    background-image: url('../assets/douche.gif');
}
</style>