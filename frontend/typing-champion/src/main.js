import Vue from 'vue'
// import App from './App.vue'
import router from './router'
import store from './store'

import App from './App2.vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
