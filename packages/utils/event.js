import Vue from 'vue';
const isServer = Vue.prototype.$isServer;
export let supportsPassive = false;

if (!isServer) {
  try {
    const opts = {};
    Object.defineProperty(opts, 'passive', {
      get() {
        supportsPassive = true;
      }
    });
    window.addEventListener('test-passive', {}, opts);
  } catch (e) {}
}

export function on(target, event, handler, passive = false) {
  if (!isServer) {
    target.addEventListener(event, handler, supportsPassive ? { capture: false, passive } : false);
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