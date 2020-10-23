<template>
  <div class="container infos">
    <form>
      <h1>Dis-moi en un peu plus sur toi !</h1>
      <label>Vous êtes ?</label>
      <div class="select-style">
      <select ref="genre">
        <option valeur="f">F</option>
        <option valeur="m">M</option>
        <option valeur="autre">Autre</option>
      </select>
      </div>

      <label>Vous vous considérez comme une personne ...</label>
      <div class="select-style">
      <select ref="retard">
        <option valeur="heure">... à l'heure.</option>
        <option valeur="retard">... toujours en retard.</option>
      </select>
      </div>
    <router-link tag="button" to="/1">GO !</router-link>
    </form>
  </div>
</template>
<script>
export default {
    mounted(){

      const genre = this.$refs.genre;
      const retard = this.$refs.retard;

      localStorage.removeItem('genre');
      localStorage.removeItem('retard');

      localStorage.setItem('score', '0');

      localStorage.setItem('genre', 'F');
      localStorage.setItem('retard', "... à l'heure.");

      genre.addEventListener("change", function() {
      localStorage.setItem('genre', genre.value);
    });

    retard.addEventListener("change", function() {
      localStorage.setItem('retard', retard.value);
    });
        
    }
}
</script>

<style lang="scss" scoped>

  form {
    margin: auto;
    height: 100%;
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

     h1 {
      margin: auto;
      margin-bottom: 0;
      font-size: 3rem;
      text-transform: uppercase;
      color: #24b784;
    }

    label {
      color: #24b784;
      margin: auto;
      font-size: 1.3rem;
      text-transform: uppercase;
      margin-bottom: 0;
      width: 40%;
    }

    .select-style {
    margin: auto;
    margin-top: 2%;
    padding: 10px;
    width: 160px;
    border-radius: 25px;
    overflow: hidden;
    color: #3a6d57;
    cursor: pointer;
    background: #24b784;
    position: relative;
}

.select-style select {
    padding: 5px;
    width: 100%;
    border: none;
    box-shadow: none;
    background: #24b784;
    background-image: none;
    appearance: none;
    cursor: pointer;
}

.select-style:after {
    top: 50%;
    left: 85%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(0, 0, 0, 0);
    border-top-color: #000000;
    border-width: 5px;
    margin-top: -2px;
    z-index: 100;
    cursor: pointer;
}

.select-style select:focus, button:focus   {
    outline: none;
}

  button {
  margin: auto;
  margin-top: 35px;
   padding: 20px 40px;
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

button:hover {
    // box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    filter: drop-shadow(0 10px 10px rgba(0, 0, 0, .4));
}
  }

</style>
