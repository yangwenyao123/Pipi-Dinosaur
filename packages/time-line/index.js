import TimeLine from './src/main';

/* istanbul ignore next */
TimeLine.install = function(Vue) {
    Vue.component(TimeLine.name, TimeLine);
};

export default TimeLine;