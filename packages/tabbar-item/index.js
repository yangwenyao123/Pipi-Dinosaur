import TabbarItem from './src/main';

/* istanbul ignore next */
TabbarItem.install = function(Vue) {
    Vue.component(TabbarItem.name, TabbarItem);
};

export default TabbarItem;