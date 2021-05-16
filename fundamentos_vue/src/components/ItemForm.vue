<template>
  <form @submit.prevent="onSubmit">
    <h2 class="label-wrapper">
      <label for="nuevo-item" class="label__lg">¿Tienes algo por hacer?</label>
    </h2>
    
    <input
      type="text"
      id="nuevo-item"
      name="nuevo-item"
      v-model.trim.lazy="label"
      class="input__lg"
    />
    <button type="submit" class="btn btn__primary btn__lg">Agregar</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      label: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.label === "") {
        return;
      }
      this.$emit("item-agregar", this.label);
      this.label = "";
    },
  },
};
</script>

<style scoped>
</style>