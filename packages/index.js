import Button from './button/index';
import Card from './card/index';
import Cell from './cell/index';
import CellGroup from './cell-group/index';
import Dialog from './dialog/index';
import Icon from './icon/index';
import Loading from './loading/index';
import Navbar from './nav-bar/index';
import Picker from './picker/index';
import Popup from './popup/index';
import Swipe from './swipe/index';
import SwipeItem from './swipe-item/index';
import Tabbar from './tabbar/index';
import TabbarItem from './tabbar-item/index';
import Tag from './tag/index';
import TimeLine from './time-line/index';
import Toast from './toast/index';

const components = [
    Button,
    Card,
    Cell,
    CellGroup,
    Dialog,
    Icon,
    Loading,
    Navbar,
    Picker,
    Popup,
    Swiper,
    SwiperItem,
    Tabbar,
    TabbarItem,
    Tag,
    TimeLine,
    Toast
]

const install = function(Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  Vue.prototype.$toast = Toast;
  Vue.prototype.$dialog = Dialog;

}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Button,
  Card,
  Cell,
  CellGroup,
  Dialog,
  Icon,
  Loading,
  Navbar,
  Picker,
  Popup,
  Swipe,
  SwipeItem,
  Tabbar,
  TabbarItem,
  Tag,
  TimeLine,
  Toast
}