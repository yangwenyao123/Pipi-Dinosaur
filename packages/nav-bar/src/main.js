export const noop = () => {

}
export default {
    name: 'NavBar',
    props: {
        title: String,
        leftText: String,
        leftArrow: Boolean,
        rightText: String,
        icon: {
            type: String,
            default: 'icon-back'
        },
        iconColor: {
            type: String,
            default: 'text-white'
        }
    },
    render(h) {
      const { title, leftText, icon, iconColor, $listeners, leftArrow, $slots, rightText } = this;
      const leftBar = leftArrow && (
        $slots.left || [
            <div class='action' onClick={$listeners['left-click'] || noop}>
                {leftArrow && <Icon icon={icon} color={iconColor} />}
                {leftText}
            </div>
        ]
      );
      const rightBar = rightText && (
        $slots.right || [
            <div class='action' onClick={$listeners['right-click'] || noop}>
                {rightText}
            </div>
        ]
      );
      const content = title && ( 
        <div class='content'>
            <span>{title}</span>
        </div>
      );
      return (
        <div class="cu-bar bg-green">
            {leftBar}
            {content}
            {rightBar}
        </div>
      );
    }
  }
  
  