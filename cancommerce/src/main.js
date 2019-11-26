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

import {
    library
} from '@fortawesome/fontawesome-svg-core'
import {
    faSearch,
    faShoppingBag,
    faShoppingCart
} from '@fortawesome/free-solid-svg-icons'
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add(faSearch, faShoppingBag, faShoppingCart)

Vue.component('font-awesome-icon', FontAwesomeIcon)


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')