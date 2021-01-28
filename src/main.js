import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'  // Install BootstrapVue

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//https://bootswatch.com/
import "bootswatch/dist/superhero/bootstrap.min.css";

import vuetify from './plugins/vuetify';

import VueVcard from 'vue-vcard';
Vue.component('vueVcard', VueVcard);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  vuetify,

  created() {
  store.dispatch('ldp_store/init');
//  store.dispatch('field/init');
//  store.commit('workspace/initializeStore');
}
}).$mount('#app')
