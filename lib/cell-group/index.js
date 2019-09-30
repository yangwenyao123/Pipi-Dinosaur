export default {
  name: 'cell-group',
  render: function render(h) {
    var $slots = this.$slots;
    return h("div", {
      "class": "cu-list menu card-menu"
    }, [$slots.default]);
  }
};