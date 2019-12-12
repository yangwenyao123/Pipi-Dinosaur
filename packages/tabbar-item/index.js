import { route, routeProps } from '../utils/router';
import Icon from '../icon';

export default {
  name: 'PiTabbarItem',
  props: {
    ...routeProps,
    icon: String,
    dot: Boolean,
    info: [String, Number],
    replace: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      active: false
    };
  },
  components: {
    Icon,
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
      route(this.$router, this);
    }
  },
  render() {
    const { icon, $slots, active } = this;
    const activeColor = active ? `color: ${this.$parent.activeColor}` : '';
    return (
      <div onClick={this.onClick} class='action' style={activeColor}>
        <Icon icon={icon} />
        <span>{$slots.default}</span>
      </div>
    );
  }
}
