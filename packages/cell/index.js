import Icon from '../icon'
import { isDef } from '../utils'
import { routeProps, route } from '../utils/router'

export default {
  name: 'PiCell',
  props: {
    ...routeProps,
    icon: String,
    value: String,
    title: String,
    color: String,
    arrow: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    click(event) {
      this.$emit('click', event);
      route(this.$router, this);
    }
  },
  render() {
    const { $slots, icon, arrow, title, value, color } = this;

    const icons = icon && <Icon icon={icon} color={color}/>;
    const leftContent = $slots['left-content'] || isDef($slots['left-content']);
    const rightCotent = ($slots['right-content'] || isDef($slots['left-content']));
    return (
      <div onClick={this.click} class={['pi-item', {'arrow': arrow === true && rightCotent === false }]}>
        { leftContent ? [
          leftContent
        ] : [
          <div class='content'>
            { icons }
            <span>{title}</span>
          </div>
        ]}
        { rightCotent ? [
          rightCotent
        ] : [
          <div class='action'>
            <span class='text-grey'>{value}</span>
          </div>
        ]}
      </div>
    );
  }
}
