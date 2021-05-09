const app = Vue.createApp({
    data() {
        return {
            animales: [
                'Perro',
                'Gato',
                'Caballo',
                'Cebra',
                'Cerdo'
            ]
        }
    }
});

const vm = app.mount('#app');