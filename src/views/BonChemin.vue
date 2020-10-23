<template>
  <div class="container bonChemin">
    <h1 ref="nar"></h1>
  </div>
</template>
<script>

import router from '../router'

export default {
    mounted(){

        const narration = this.$refs.nar; 

        setTimeout(function(){ narration.innerHTML = "pfffffffff..."; }, 2000);

         setTimeout(function(){ narration.innerHTML = "C’est pas trop tôt !"; }, 5000);

        setTimeout(function(){ router.push('/7'); }, 11000);
    }
}

</script>
<style lang="scss" scoped>
.bonChemin {
    background-image: url('../assets/sprint.gif');
}
</style>