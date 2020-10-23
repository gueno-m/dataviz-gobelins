<template>
  <div class="container reveil">
    <h1 ref="nar"></h1>

    <div class="buttonsContainer" ref="buttonsContainer">
       <router-link tag="a" to="/3bis">Flemme je snooze</router-link>
       <button v-on:click="score">Un peu de courage voyons</button>
    </div>

    <audio autoplay preload="auto" ref="reveil" id="reveil">
  <source src="../assets/reveil.mp3" type="audio/mpeg">
</audio>
  </div>
</template>
<script>

export default {
  mounted(){

      this.$refs.reveil.volume = 0.03;

      const bouttons = this.$refs.buttonsContainer;
      const narration = this.$refs.nar; 

      setTimeout(function(){ narration.innerHTML = 'Bip bip bip bip bip bip bip ...'; }, 1000);

      setTimeout(function(){ narration.innerHTML = ' '; }, 5700);

      setTimeout(function(){ narration.innerHTML = '"TITRE"'; }, 7500); 
      
        setTimeout(function(){ narration.innerHTML = 'Déjà le matin !'; }, 10800);

        setTimeout(function(){ narration.innerHTML = 'Il est 8:30 tu es en retard !'; }, 12800);
      
        setTimeout(function(){ bouttons.style.opacity = "1"; }, 12800);
    },
    methods: {
      score() {

        let score = localStorage.getItem('score');
        score = parseInt(score) + 25;
          localStorage.setItem('score', score.toString());

          this.$router.push('/3')
    }
  }
}

</script>
<style lang="scss" scoped>
.reveil {
    background-image: url('../assets/reveil.gif');
}
</style>