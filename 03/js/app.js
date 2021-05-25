const planilla = Vue.createApp({
    data() {
        return {
            gato: {
                url: null
            }
        }
    },
    methods: {
        siguiente() {
            axios({
                method: 'get',
                url: 'https://aws.random.cat/meow',
                responseType: 'json'
            })
                .then(response => {
                    const randomUrl = response.data;
                    this.gato.url = randomUrl.file;
                });
        }
    },
    created() {
        this.siguiente();
    }
});


const vm = planilla.mount('#planilla-section');

