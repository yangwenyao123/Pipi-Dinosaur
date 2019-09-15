
import icon from '../icon';
export default {
  name: 'tabbar-item',
  props: {
    icon: String,
    dot: Boolean,
    info: [String, Number]
  },

  data() {
    return {
      active: false
    };
  },
  components: {
    icon,
  },
  beforeCreate() {
    this.$parent.items.push(this);
  },

  destroyed() {
    this.$parent.items.splice(this.$parent.items.indexOf(this), 1);
  },

  methods: {
    onClick(event) {
      this.$parent.onChange(this.$parent.items.indexOf(this));
      this.$emit('click', event);
    }
  },

  render() {
    const { icon, $slots, active } = this;
    const avtive = active ? this.$parent.activeColor + ' action' : 'action text-gray';
    return (
      <div onClick={this.onClick} class={avtive}>
        <div class={icon}>
        </div>
        <span>{$slots.default}</span>
      </div>
    );
  }
}
