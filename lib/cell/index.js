import "core-js/modules/es7.object.get-own-property-descriptors";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.object.keys";
import _defineProperty from "C:\\Users\\86182\\Desktop\\Pipi-Dinosaur\\node_modules\\@babel\\runtime-corejs2/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import Icon from "../icon";
import { isDef } from "../utils";
import { routeProps, functionalRoute } from "../utils/router";
export default {
  name: 'cell',
  props: _objectSpread({}, routeProps, {
    icon: String,
    value: String,
    title: String,
    color: String,
    arrow: {
      default: false,
      type: Boolean
    }
  }),
  methods: {
    click: function click(event) {
      this.$emit('click', event);
      functionalRoute(this);
    }
  },
  render: function render(h) {
    var $slots = this.$slots,
        icon = this.icon,
        arrow = this.arrow,
        title = this.title,
        value = this.value,
        color = this.color;
    var icons = icon && h(Icon, {
      "attrs": {
        "icon": icon,
        "color": color
      }
    });
    var leftContent = $slots['left-content'] || isDef($slots['left-content']);
    var rightCotent = $slots['right-content'] || isDef($slots['left-content']);
    return h("div", {
      "on": {
        "click": this.click
      },
      "class": ['cu-item', {
        'arrow': arrow === true && rightCotent === false
      }]
    }, [leftContent ? [leftContent] : [h("div", {
      "class": 'content'
    }, [icons, h("span", {
      "class": 'text-grey'
    }, [title])])], rightCotent ? [rightCotent] : [h("div", {
      "class": 'action'
    }, [h("span", {
      "class": 'text-grey'
    }, [value])])]]);
  }
};