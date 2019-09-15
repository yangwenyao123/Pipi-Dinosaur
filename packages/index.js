import Vue from 'vue';
import icon from './icon';
import tag from './tag';
import navBar from './navBar';
import tabbar from './tabbar';
import tabbarItem from './tabbar-item';

const version = '0.1.1';
const components = [
    icon,
    tag,
    navBar,
    tabbar,
    tabbarItem
];

components.forEach(Component => {
    Vue.component(Component.name, Component);
});

export {
  version,
  icon,
  tag,
  navBar,
  tabbar,
  tabbarItem,
};