import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import JQuery from 'jquery';
window.$ = window.JQuery = JQuery;
import 'popper.js';
import 'bootstrap';
import './assets/app.scss';

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')