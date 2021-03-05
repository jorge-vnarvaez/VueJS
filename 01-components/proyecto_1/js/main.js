"use strict";

const app = Vue.createApp({
    data() {
        return {
            nombre: "Jorge",
            apellido: "Valdes",
            hobbies: ["Music", "Videogames", "K-Pop"]
        }
    }
});

const vm = app.mount("#app");
