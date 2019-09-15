import Vue from 'vue'
import App from './App.vue'

import { icon, navBar } from '../packages';
Vue.use(icon);
Vue.use(navBar);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

