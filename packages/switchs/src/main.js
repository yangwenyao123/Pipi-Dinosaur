
export default {
  name: 'Switchs',
  props: {
    size: String,
    color: String,
    value: Boolean,
    activeValue: {
      default: false,
      type: Boolean,
    },
    inactiveValue: {
      default: true,
      type: Boolean,
    },
    activeColor: String,
    inactiveColor: String,
  },
  methods: {
    click() {
      const { value, activeValue, inactiveValue } = this;
      const newValue = value === activeValue ? inactiveValue : activeValue;
      this.$emit('input', newValue);
      this.$emit('change', newValue);
    }
  },
  render() {
    const { value } = this;
    const style = {
      fontSize: this.size,
      backgroundColor: value ? this.activeColor : this.inactiveColor
    };
    return (
      <div class={['switch',{
          'switch--on': value === this.activeValue,
        }]}
        style={style}
        onClick={this.click}
      >
      <div class='switch__node'></div>
      </div>
    );
  }
}
