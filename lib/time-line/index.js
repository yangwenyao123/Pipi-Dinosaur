export default {
  name: 'time-line',
  props: {
    time: String
  },
  render: function render(h) {
    var time = this.time,
        $slots = this.$slots;
    var Time = h("span", {
      "class": "cu-time"
    }, [time]);
    return h("div", {
      "class": "cu-timeline"
    }, [Time, $slots.default]);
  }
};