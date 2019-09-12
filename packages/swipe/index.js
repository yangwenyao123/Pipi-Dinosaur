import Swipe from './src/main';

/* istanbul ignore next */
Swipe.install = function(Vue) {
    Vue.component(Swipe.name, Swipe);
};

export default Swipe;