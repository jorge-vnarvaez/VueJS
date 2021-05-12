const planilla = Vue.createApp({

});


planilla.component('cabeza', {
    props: {
        horario: String
    },
    template: `<div>
        <h1>{{ horario }}</h1>
    </div>`
});

const vm = planilla.mount('#planilla-section');

