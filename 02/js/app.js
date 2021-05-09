const app = Vue.createApp({
    data() {
        return {
            animales: [
                'Perro',
                'Gato',
                'Caballo',
                
            ]
        }
    },
    computed: {
        cuatroOMas() {
            return this.animales.length > 4 ? 'Si' : 'No'; 
        }
    }
});

const vm = app.mount('#app');