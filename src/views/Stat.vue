<template>
  <div class="container stat">
    <h1>Résumé de votre matinée</h1>
    <!-- <ChartDeux/> -->
    <ChartOne/>

    <p class="info">Survol le graphique pour voir tes stats</p>

    <div class="legende">
      <div class="bien">
        <p>Bien Joué</p>
        <div></div>
      </div>
      <div class="mauvais">
        <p>Mauvais</p>
      <div></div>
      </div>
    </div>
    <button v-on:click="restart">Encore</button>
  </div>
</template>
<script>

import ChartOne from '../components/ChartOne'
import ChartDeux from '../components/ChartDeux'

export default {
  components: {
    ChartOne,
    ChartDeux
  },
  methods: {
      restart() {
          this.$router.push('/')
    }
  }
}

</script>
<style lang="scss" scoped>

.stat div {
  margin: auto;
  margin-bottom: 0;
  z-index: 3;
}

// .stat div:nth-child(2) {
//   position: absolute;
//   width: 100%;
//   transform: scale(.7);
//   top: calc(50vh - 140px);
// }

.stat h1 {
  margin: auto;
  margin-bottom: 0;
  font-size: 3rem;
  text-transform: uppercase;
  color: #24b784;
}

.stat .legende {
  position: absolute;
  top: 42%;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100px;
  // border: solid 2px red;
}

.stat .legende p {
  margin: auto;
  margin-right: 0;
  font-weight: bold;
  font-size: 1.4rem;
  text-transform: uppercase;
}

.stat .legende .bien, .stat .legende .mauvais {
  display: flex;
  width: 100%;
  // border: solid 2px white;
}

.stat .legende .bien p {
  color: #249e70;
}

.stat .legende .mauvais p {
  color: #EB5A52;
}

.stat .legende .bien div, .stat .legende .mauvais div {
  margin: auto;
  margin-right: 0;
  height: 15px;
  width: 100px;
}

.stat .legende .bien div {
  background-color: #249e70;
}
.stat .legende .mauvais div {
  background-color:#EB5A52;
}

button {
  margin: auto;
  // margin-top: 0;
  margin-bottom: 3%;
  padding: 20px;
  font-size: 1.2rem;
   text-transform: uppercase;
   font-weight: bold;
   background-color: transparent;
   border: solid 4px #EB5A52;
   border-radius: 40px;
   color: #EB5A52;
   cursor: pointer;
   transition: all .3s ease;
}

button:focus   {
    outline: none;
}

button:hover {
    // box-shadow: 0px 2px 5px 5px rgba(0, 0, 0, 0.1);
    filter: drop-shadow(0 10px 10px rgba(0, 0, 0, .4));
}

.info {
  position: absolute;
  top: 49%; 
  left: 50%; 
  transform: translate(-50%, -50%);
  color: #24b784;
  width: 200px;

}

</style>