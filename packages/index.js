import Icon from './Icon';
import Vue from 'vue';


const version = '0.1.1';
const components = [
    Icon
];

components.forEach(Component => {
    Vue.component(Component.name, Component);
});


export {
  version,
  Icon
};

export default {
  version
};