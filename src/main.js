import Vue from 'vue'
import App from './App.vue'

import { Icon } from '../packages';
Vue.use(Icon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

