import "core-js/modules/es6.regexp.replace";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.regexp.split";
import _typeof from "C:\\Users\\86182\\Desktop\\Pipi-Dinosaur\\node_modules\\@babel\\runtime-corejs2/helpers/esm/typeof";
import Vue from 'vue';
export var isServer = Vue.prototype.$isServer;
export function isDef(value) {
  return value !== undefined && value !== null;
}
export function isObj(x) {
  var type = _typeof(x);

  return x !== null && (type === 'object' || type === 'function');
}
export function get(object, path) {
  var keys = path.split('.');
  var result = object;
  keys.forEach(function (key) {
    result = isDef(result[key]) ? result[key] : '';
  });
  return result;
}
var camelizeRE = /-(\w)/g;
export function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c.toUpperCase();
  });
}
export function isAndroid() {
  /* istanbul ignore next */
  return isServer ? false : /android/.test(navigator.userAgent.toLowerCase());
}
export function isIOS() {
  /* istanbul ignore next */
  return isServer ? false : /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
}
export function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
export function isInDocument(element) {
  return document.body.contains(element);
}