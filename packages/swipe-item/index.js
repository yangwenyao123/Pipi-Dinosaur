import SwipeItem from './src/main';

/* istanbul ignore next */
SwipeItem.install = function(Vue) {
    Vue.component(SwipeItem.name, SwipeItem);
};

export default SwipeItem;