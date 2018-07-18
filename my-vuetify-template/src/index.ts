import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

import App from "./App.vue";

Vue.use(Vuetify);

new Vue({
    el: "#app",
    template: "<app />",
    components: {
        App
    }
});
