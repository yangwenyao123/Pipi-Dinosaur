export default {
  name: 'Tag',
  props: {
    border: String,
    size: String,
    color: String,
    dot: Boolean,
    line: Boolean
  },
  render() {
    const { $slots, dot, color, size, line, border } = this;
    const tagClass = [
      'cu-tag',
      line ? 'line-' + color : 'bg-' + color,
      size,
      border
    ]
    const dotClass = 'cu-tag badge';
    return (
      <span class={dot === true ?  dotClass : tagClass }>{$slots.default}</span>
    );
  }
}
