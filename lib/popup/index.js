var positionList = {
  'center': '',
  'bottom': 'bottom-modal',
  'left': 'drawer-modal justify-start',
  'right': 'drawer-modal justify-end'
};
export default {
  name: 'popup',
  props: {
    value: Boolean,
    position: {
      default: 'center',
      type: String
    },
    styleed: String
  },
  data: function data() {
    return {
      inited: this.value
    };
  },
  watch: {
    value: function value(val) {
      var type = val ? 'open' : 'close';
      this.inited = this.inited || this.value;
      this[type]();
      this.$emit(type);
    }
  },
  computed: {
    positioned: function positioned() {
      return positionList[this.position];
    }
  },
  methods: {
    open: function open() {
      this.$emit('input', true);
    },
    close: function close() {
      this.$emit('input', false);
    }
  },
  render: function render(h) {
    var $slots = this.$slots,
        value = this.value,
        styleed = this.styleed;

    if (!value) {
      return;
    }

    var classed = ['cu-modal', {
      'show': value === true
    }, this.positioned];
    return h("div", {
      "class": classed,
      "style": styleed
    }, [$slots.default]);
  }
};