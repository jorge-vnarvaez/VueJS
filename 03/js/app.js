const planilla = Vue.createApp({
    data() {
        return {
            gato: {
                url: null
            }
        }
    },
    created: function () {
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
});


const vm = planilla.mount('#planilla-section');

