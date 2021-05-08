const app = Vue.createApp({
    data() {
        return { 
            contador: 0,
            tiempoLimite: 5,
            timer: {}
        }
    },
    mounted() {
        this.timer = setInterval(() => {
            this.contador++;
        }, 1000)
    },
    methods: {
        tiempo() {
            if(this.contador == 5) {
                clearInterval(this.timer);
                return true;
            }
        }
    }
});

const vm = app.mount('#app');




