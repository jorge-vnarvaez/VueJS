<template>
  <div>
    <button type="submit" class="btn btn-primary mb-5" @click="seleccionada">
      Elegir letra
    </button>
    <div class="row row-cols-6 g-2">
      <div class="col" v-for="letra in letras" :key="letra.id">
        <letra :letra="letra"></letra>
      </div>
    </div>
  </div>
</template>


<script>
import Letra from "./Letra.vue";

export default {
  components: {
    Letra,
  },
  data() {
    return {
      letras: [
        { id: 1, label: "a", display: "block" },
        { id: 2, label: "b", display: "block" },
        { id: 3, label: "c", display: "block" },
        { id: 4, label: "d", display: "block" },
        { id: 5, label: "e", display: "block" },
        { id: 6, label: "f", display: "block" },
        { id: 7, label: "g", display: "block" },
        { id: 8, label: "h", display: "block" },
        { id: 9, label: "i", display: "block" },
        { id: 10, label: "j", display: "block" },
        { id: 11, label: "k", display: "block" },
        { id: 12, label: "l", display: "block" },
        { id: 13, label: "m", display: "block" },
        { id: 14, label: "n", display: "block" },
        { id: 15, label: "ñ", display: "block" },
        { id: 16, label: "o", display: "block" },
        { id: 17, label: "p", display: "block" },
        { id: 18, label: "q", display: "block" },
        { id: 19, label: "r", display: "block" },
        { id: 20, label: "s", display: "block" },
        { id: 21, label: "t", display: "block" },
        { id: 22, label: "u", display: "block" },
        { id: 23, label: "v", display: "block" },
        { id: 24, label: "w", display: "block" },
        { id: 25, label: "x", display: "block" },
        { id: 26, label: "y", display: "block" },
        { id: 27, label: "z", display: "block" },
      ],
    };
  },
  methods: {
    seleccionada() {
      let randomIndex = parseInt(Math.random() * this.letras.length - 1);

      if (this.letras[randomIndex].display == "none") {
        return;
      }

      alert(
        "Letra seleccionada: " + this.letras[randomIndex].label.toUpperCase()
      );

      this.letras.splice(randomIndex, 1);
    },
  },
};
</script>

<style scoped>
</style>