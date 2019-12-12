import Vue from 'vue';
import Tabbar from './tabbar';
import TabbarItem from './tabbar-item';
import Icon from './icon';
import Tag from './tag';
import Cell from './cell';
import CellGroup from './cell-group';

const version = '0.1.6';
const components = [
    Tabbar,
    TabbarItem,
    Icon,
    Tag,
    Cell,
    CellGroup
];

components.forEach(Component => {
  Vue.component(Component.name, Component);
});

export {
  version,
  Tabbar,
  TabbarItem,
  Icon,
  Tag,
  Cell,
  CellGroup
};