<template>
  <div class="container">
    <alfabeto></alfabeto>
    <p>{{ resultado }}</p>
  </div>
</template>

<script>
import Alfabeto from "./components/Alfabeto.vue";

export default {
  name: "App",
  data() {
    return {
      resultado: "",
    };
  },
  components: {
    Alfabeto,
  },
  methods: {
   
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
