"use strict";

const app = Vue.createApp({
    data() {
        return {
            nameArtist: "Led Zeppelin",
            titleVideo: "All Of My Love",
            duration: "5:50",
            url: "https://www.youtube.com/watch?v=cdERUjC0rYw"
        }
    }
});

const vm = app.mount("#app");