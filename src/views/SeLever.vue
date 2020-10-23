<template>
  <div class="container seLever">
    <h1 ref="nar"></h1>

    <div class="buttonsContainer" ref="buttonsContainer">
        <router-link tag="a" to="/4bis">Petite douche ?</router-link>
       <button v-on:click="score">Franchement ça passe...</button>
    </div>
  </div>
</template>
<script>

export default {
  mounted(){

      const bouttons = this.$refs.buttonsContainer;
      const narration = this.$refs.nar;
      setTimeout(function(){ narration.innerHTML = "T’es carrément souillé de la soirée d’hier !"; }, 2000);
      
        setTimeout(function(){ bouttons.style.opacity = "1"; }, 2000);
    },
     methods: {
      score() {

        let score = localStorage.getItem('score');
        score = parseInt(score) + 25;
          localStorage.setItem('score', score.toString());

          this.$router.push('/4')
    }
  }
}

</script>
<style lang="scss" scoped>
.seLever {
    background-image: url('../assets/etirement.jpg');
}
</style>