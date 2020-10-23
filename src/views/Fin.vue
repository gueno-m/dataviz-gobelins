<template>
  <div class="container fin">
    <h2>Et bien <span ref="genreFinal"> </span> !</h2>
    <h3 ref="retardFinal"> </h3>
  </div>
</template>
<script>

import router from '../router'

export default {
    mounted(){

     const genreFinal = this.$refs.genreFinal;
     const retardFinal = this.$refs.retardFinal;

    //  console.log(genreFinal);

      if (localStorage.getItem('genre') == 'F'){
        genreFinal.innerHTML = 'mademoiselle';
      }; 
      if (localStorage.getItem('genre') == 'M'){
        genreFinal.innerHTML = 'monsieur';
      };
      if (localStorage.getItem('genre') == 'Autre'){
        genreFinal.innerHTML = 'personne asexuée';
      };
      let score = localStorage.getItem('score');
      if (localStorage.getItem('retard') == "... à l'heure."){
        if(score > 50)
          retardFinal.innerHTML = "Vous êtes fidèles à vous-même, vous êtes bien à l'heure !";
        else
          retardFinal.innerHTML = "Vous êtes en retard, Je pensais que vous étiez une personne à l'heure !";

      } else {
        if (score < 50)
          retardFinal.innerHTML = "Vous êtes fidèles à vous-même, vous êtes bien en retard !";
        else           
          retardFinal.innerHTML = "Vous êtes à l'heure, Je pensais que vous étiez une personne tout le temps en retard !";
      }

        setTimeout(function(){ router.push('/9'); }, 4000);
    }
}

</script>
<style lang="scss" scoped>
.fin h2, .fin h3 {
    margin: auto;
    color: #24b784;
}

.fin h2 {
    margin-bottom: 1%;
    font-size: 3rem;
}

.fin h3 {
    margin-top: 1%;
    font-size: 2rem;
}
</style>