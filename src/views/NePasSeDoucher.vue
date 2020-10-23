<template>
  <div class="container nePasSeDoucher">
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

      setTimeout(function(){ narration.innerHTML = "Je ne sais pas ce que t’as fait hier soir, mais tu pues un max !"; }, 2000);

      setTimeout(function(){ narration.innerHTML = "..."; }, 4500);

      setTimeout(function(){ narration.innerHTML = "Gros crado..."; }, 8500);

      setTimeout(function(){ narration.innerHTML = "Merde, ton vélo !!!"; }, 12300);
      
        setTimeout(function(){ bouttons.style.opacity = "1"; },12300);
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
.nePasSeDoucher {
    background-image: url('../assets/pasdouche.gif');
}
</style>