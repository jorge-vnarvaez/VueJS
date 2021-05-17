<template>
  <div :style='estado' class="py-5 px-2 bg-dark text-white text-uppercase fw-bold">
    <p>{{ letra.label }}</p>
  </div>
</template>

<script>
export default {
  props: {
    letra: Object,
  },
  data() {
      return {
          estado: {
              display: this.letra.display
          }
      }
  },
};
</script>

<style scoped>
</style>
