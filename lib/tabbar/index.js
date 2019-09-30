import "core-js/modules/es6.string.fixed";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.number.constructor";
export default {
  name: 'tabbar',
  data: function data() {
    return {
      items: []
    };
  },
  props: {
    value: Number,
    activeColor: String,
    fixed: Boolean,
    bgColor: {
      type: String,
      default: 'bg-white'
    }
  },
  methods: {
    setActiveItem: function setActiveItem() {
      var _this = this;

      this.items.forEach(function (item, index) {
        item.active = index === _this.value;
      });
    },
    onChange: function onChange(active) {
      if (active !== this.value) {
        this.$emit('input', active);
        this.$emit('change', active);
      }
    }
  },
  watch: {
    items: function items() {
      this.setActiveItem();
    },
    value: function value() {
      this.setActiveItem();
    }
  },
  components: {},
  render: function render() {
    var h = arguments[0];
    var fixed = this.fixed,
        bgColor = this.bgColor,
        $slots = this.$slots;
    var classed = [{
      'foot': fixed
    }, bgColor, 'tabbar'];
    return h("div", {
      "class": classed
    }, [$slots.default]);
  }
};