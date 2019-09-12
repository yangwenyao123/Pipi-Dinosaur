import Switchs from './src/main';

/* istanbul ignore next */
Switchs.install = function(Vue) {
    Vue.component(Switchs.name, Switchs);
};

export default Switchs;