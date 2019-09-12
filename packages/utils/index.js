import Vue from 'vue';
export const isServer = Vue.prototype.$isServer;

export function isDef(value) {
    return value !== undefined && value !== null;
}

export function isObj(x) {
    const type = typeof x;
    return x !== null && (type === 'object' || type === 'function');
  }
  
  export function get(object, path) {
    const keys = path.split('.');
    let result = object;
  
    keys.forEach(key => {
      result = isDef(result[key]) ? result[key] : '';
    });
  
    return result;
  }
  
  const camelizeRE = /-(\w)/g;
  export function camelize(str) {
    return str.replace(camelizeRE, (_, c) => c.toUpperCase());
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