
import Icon from '../../icon';
import { route, routeProps } from '../../utils/router'
export default {
  name: 'TabbarItem',
  props: {
    ...routeProps,
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

  render(h) {
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
