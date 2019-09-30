export default {
  name: 'button',
  props: {
    color: String,
    size: {
      default: 'block',
      type: String
    },
    round: Boolean,
    shadow: Boolean,
    line: Boolean,
    loading: Boolean
  },
  render: function render() {
    var h = arguments[0];
    var color = this.color,
        size = this.size,
        line = this.line,
        $slots = this.$slots,
        round = this.round,
        shadow = this.shadow;
    var classed = ['cu-btn', line ? 'line-' + color : 'bg-' + color, size === 'block' ? 'block' : size, {
      'shadow': shadow
    }, round];
    return h("button", {
      "class": classed
    }, [this.loading ? [$slots.default] : $slots.default]);
  }
};