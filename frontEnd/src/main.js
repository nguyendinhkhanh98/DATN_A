import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import { ValidationProvider } from 'vee-validate';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import './assets/css/grid.css'

require ('./assets/css/grid.css')

// library.add(faUserSecret)
// Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('ValidationProvider', ValidationProvider);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
