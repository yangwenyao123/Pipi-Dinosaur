import Vue from 'vue'
import App from './App.vue'

import { icon, navBar, timeLine, picker} from '../packages';
Vue.use(icon);
Vue.use(navBar);

Vue.use(timeLine)
Vue.use(picker);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

