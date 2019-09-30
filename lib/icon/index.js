export default {
  name: 'icon',
  props: {
    icon: String,
    size: String,
    color: String
  },
  render: function render() {
    var h = arguments[0];
    var icon = this.icon,
        color = this.color,
        size = this.size;
    var styleed = {
      'font-size': size
    };
    return h("span", {
      "style": styleed,
      "class": [icon, color]
    });
  }
};