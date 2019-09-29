import Vue from 'vue';
import icon from './icon';
import tag from './tag';
import navBar from './nav-bar';
import tabbar from './tabbar';
import tabbarItem from './tabbar-item';
import cell from './cell';
import cellGroup from './cell-group';
import timeLine from './time-line';
import picker from './picker';

const version = '0.1.1';
const components = [
    icon,
    tag,
    navBar,
    tabbar,
    tabbarItem,
    cell,
    cellGroup,
    timeLine,
    picker
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
  cell,
  cellGroup,
  timeLine,
  picker
};