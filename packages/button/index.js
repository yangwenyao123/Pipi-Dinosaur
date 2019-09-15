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
    render() {
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
          {this.loading ? ([$slots.default]) : $slots.default }
        </button>
      );
    }
  }