export var noop = function noop() {};
export default {
  name: 'nav-bar',
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
  render: function render() {
    var h = arguments[0];
    var title = this.title,
        leftText = this.leftText,
        icon = this.icon,
        iconColor = this.iconColor,
        $listeners = this.$listeners,
        leftArrow = this.leftArrow,
        $slots = this.$slots,
        rightText = this.rightText;
    var leftBar = leftArrow && ($slots.left || [h("div", {
      "class": 'action',
      "on": {
        "click": $listeners['left-click'] || noop
      }
    }, [leftArrow && h("Icon", {
      "attrs": {
        "icon": icon,
        "color": iconColor
      }
    }), leftText])]);
    var rightBar = rightText && ($slots.right || [h("div", {
      "class": 'action',
      "on": {
        "click": $listeners['right-click'] || noop
      }
    }, [rightText])]);
    var content = title && h("div", {
      "class": 'content'
    }, [h("span", [title])]);
    return h("div", {
      "class": "nav-bar bg-green"
    }, [leftBar, content, rightBar]);
  }
};