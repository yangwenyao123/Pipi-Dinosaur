export default {
  name: 'tag',
  props: {
    border: String,
    size: String,
    color: String,
    dot: Boolean,
    line: Boolean
  },
  render: function render() {
    var h = arguments[0];
    var $slots = this.$slots,
        dot = this.dot,
        color = this.color,
        size = this.size,
        line = this.line,
        border = this.border;
    var tagClass = ['cu-tag', line ? 'line-' + color : 'bg-' + color, size, border];
    var dotClass = 'cu-tag badge';
    return h("span", {
      "class": dot === true ? dotClass : tagClass
    }, [$slots.default]);
  }
};