import Vue from 'vue';
var isServer = Vue.prototype.$isServer;
export var supportsPassive = false;

if (!isServer) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      get: function get() {
        supportsPassive = true;
      }
    });
    window.addEventListener('test-passive', {}, opts);
  } catch (e) {}
}

export function on(target, event, handler) {
  var passive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (!isServer) {
    target.addEventListener(event, handler, supportsPassive ? {
      capture: false,
      passive: passive
    } : false);
  }
}
export function off(target, event, handler) {
  !isServer && target.removeEventListener(event, handler);
}
export function stop(event) {
  event.stopPropagation();
}
export function prevent(event) {
  event.preventDefault();
}