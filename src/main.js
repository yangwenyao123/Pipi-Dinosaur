import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import Tabbar from '../packages/tabbar'
import TabbarItem from '../packages/tabbar-item';
import Tag from '../packages/tag';
import Button from '../packages/button';
import Swipe from '../packages/swipe';
import SwipeItem from '../packages/swipe-item';
import Loading from '../packages/loading';
import TimeLine from '../packages/time-line';
import Card from '../packages/card';
import Cell from '../packages/cell';
import CellGroup from '../packages/cell-group';
import PullRefresh from '../packages/pull-refresh';
import Icon from '../packages/icon';
import NavBar from '../packages/nav-bar';
import Switchs from '../packages/switchs';
import Picker from '../packages/picker';
import Popup from '../packages/popup';
import Dialog from '../packages/dialog';
import Toast from '../packages/toast';


Vue.config.productionTip = false
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Switchs);
Vue.use(Tag);
Vue.use(Button);
Vue.use(Icon);
Vue.use(NavBar);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(PullRefresh);
Vue.use(TimeLine);
Vue.use(Card);
Vue.use(Loading);
Vue.use(Picker);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Popup);
Vue.use(Dialog);
Vue.use(Toast);




router.beforeEach((to, from, next) => {
  next();
  store.dispatch('setRoute', to)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
