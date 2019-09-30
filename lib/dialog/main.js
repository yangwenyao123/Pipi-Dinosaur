import Popup from "../popup";
export default {
  name: 'Dialog',
  data: function data() {
    return {
      inited: this.value
    };
  },
  props: {
    value: Boolean,
    title: String,
    message: String,
    cancelButtonText: String,
    cancelButtonColor: String,
    confirmButtonText: String,
    confirmButtonColor: String,
    showCancelButton: Boolean,
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    callback: Function
  },
  watch: {
    value: function value(val) {
      this.inited = this.inited || this.value;
    }
  },
  computed: {
    shouldRender: function shouldRender() {
      return this.inited;
    }
  },
  methods: {
    handleAction: function handleAction(action) {
      this.close(action);
    },
    close: function close(action) {
      if (this.callback) {
        this.value = false;
        this.callback(action);
      } else {
        this.$emit('input', false);
      }
    }
  },
  render: function render(h) {
    var _this = this;

    var title = this.title;

    if (!this.shouldRender) {
      return;
    }

    var childRen = this.$slots.default;
    var Title = h("div", {
      "class": "weui-dialog__hd"
    }, [h("div", {
      "class": "weui-dialog__title"
    }, [title])]);
    var Content = (childRen || this.message) && h("div", [childRen || h("div", {
      "class": "weui-dialog__bd"
    }, [this.message])]);
    var Buttton = h("div", {
      "class": "weui-dialog__ft"
    }, [this.showCancelButton && h("div", {
      "class": "weui-dialog__btn text-red",
      "on": {
        "click": function click() {
          _this.handleAction('cancel');
        }
      }
    }, ["\u53D6\u6D88"]), this.showConfirmButton && h("div", {
      "class": "weui-dialog__btn text-grey",
      "on": {
        "click": function click() {
          _this.handleAction('confirm');
        }
      }
    }, ["\u786E\u5B9A"])]);
    return h(Popup, {
      "attrs": {
        "value": this.value,
        "position": "center"
      }
    }, [h("div", {
      "class": "weui-dialog"
    }, [Title, Content, Buttton])]);
  }
};