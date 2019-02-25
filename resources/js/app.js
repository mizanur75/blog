require('./bootstrap');

// window.Vue = require('vue');
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import {routes} from './routes';

// Snotify
import Snotify, {SnotifyPosition} from 'vue-snotify';
Vue.use(Snotify)
const SnotifyOptions = {
  toast: {
    position: SnotifyPosition.rightTop
  }
}
Vue.use(Snotify, SnotifyOptions)

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-master', require('./components/admin/AdminMaster.vue').default);


// V- Form
import { Form, HasError, AlertError } from 'vform'
window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

//Sweet Alert
import Swal from 'sweetalert2'
window.Swal = Swal
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})
window.Toast = Toast

//Vuex
import Vuex from 'vuex'
Vue.use(Vuex)
import vuexStore from './vuex/vuexStore'
const store = new Vuex.Store({
  vuexStore
})

const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: 'history'
})

const app = new Vue({
    el: '#app',
    router,
    store
});
