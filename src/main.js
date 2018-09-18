import { sync } from 'vuex-router-sync'
import Vue from 'vue'

import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

// Effortlessly keep vue-router and vuex store in sync.
sync(store, router) // https://github.com/vuejs/vuex-router-sync/tree/next

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
