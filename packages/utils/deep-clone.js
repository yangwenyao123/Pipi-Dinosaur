export function deepClone(obj) {
    if (Array.isArray(obj)) {
      return obj.map(item => deepClone(item));
    }
    if (typeof obj === 'object') {
      return deepAssign({}, obj);
    }
    return obj;
  }

export function deepAssign(to, from) {
  Object.keys(from).forEach(key => {
    assignKey(to, from, key);
  });

  return to;
}