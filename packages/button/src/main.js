import Loading from '../../loading';
export default {
  name: 'Button',
  props: {
    color: String,
    size: String,
    round: Boolean,
    shadow: Boolean,
    line: Boolean,
    loading: Boolean
  },
  render(h) {
    const { color, size, line, $slots, round, shadow } = this;
    const classed = [
      'cu-btn',
      line ? 'line-' + color : 'bg-' + color,
      size === 'block' ? 'block' : size,
      {
      'shadow': shadow,
      },
      round
    ]
    return (
      <button class={classed}>
        {this.loading ? ([<Loading type={'icon-loading1'}></Loading>, $slots.default]) : $slots.default }
      </button>
    );
  }
}
