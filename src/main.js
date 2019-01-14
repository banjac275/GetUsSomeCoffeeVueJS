import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import { store } from './store/store'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  render: h => h(App),
}).$mount('#app')
