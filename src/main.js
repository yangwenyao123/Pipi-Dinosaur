import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { Tabbar, TabbarItem, Tag, CellGroup, Cell } from '../packages';

Vue.use(TabbarItem);
Vue.use(Tabbar);
Vue.use(Tag);

Vue.use(Cell);
Vue.use(CellGroup);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
