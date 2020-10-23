<template>
  <div class="container manif">
    <h1 ref="nar"></h1>
  </div>
</template>
<script>

import router from '../router'

export default {
    mounted(){

      const narration = this.$refs.nar; 

        setTimeout(function(){ narration.innerHTML = "Chouette une manif, t’es dans la merde !"; }, 2000);

         setTimeout(function(){ narration.innerHTML = "BIM ! Flash-balls dans la gueule !"; }, 4750);

         setTimeout(function(){ narration.innerHTML = "C’est pas trop tôt !"; }, 8750);

        setTimeout(function(){ router.push('/7'); }, 13000);
    }
}

</script>
<style lang="scss" scoped>
.manif {
    background-image: url('../assets/manif.gif');
}
</style>