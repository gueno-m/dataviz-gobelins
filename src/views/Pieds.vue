<template>
  <div class="container pieds">
    <h1 ref="nar"></h1>

    <div class="buttonsContainer" ref="buttonsContainer">
      <router-link tag="a" to="/6bis">Askip c’est plus court par là</router-link>
       <button v-on:click="score">La valeurs sûr mais VITE !</button>
    </div>
  </div>
</template>
<script>

export default {
  mounted(){

      const bouttons = this.$refs.buttonsContainer;
      const narration = this.$refs.nar; 

      setTimeout(function(){ narration.innerHTML = "La vie est belle, les oiseaux chantent, tu décuves"; }, 2000);

      setTimeout(function(){ narration.innerHTML = "Mec t’es paumé là !"; }, 5000);
      
        setTimeout(function(){ bouttons.style.opacity = "1"; }, 5000);
    },
     methods: {
      score() {

        let score = localStorage.getItem('score');
        score = parseInt(score) + 25;
          localStorage.setItem('score', score.toString());

          this.$router.push('/6')
    }
  }
}

</script>
<style lang="scss" scoped>
.pieds {
    background-image: url('../assets/pieds.gif');
}
</style>