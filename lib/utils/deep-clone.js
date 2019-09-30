import "core-js/modules/es6.object.keys";
import "core-js/modules/web.dom.iterable";
import _typeof from "C:\\Users\\86182\\Desktop\\Pipi-Dinosaur\\node_modules\\@babel\\runtime-corejs2/helpers/esm/typeof";
export function deepClone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(function (item) {
      return deepClone(item);
    });
  }

  if (_typeof(obj) === 'object') {
    return deepAssign({}, obj);
  }

  return obj;
}
export function deepAssign(to, from) {
  Object.keys(from).forEach(function (key) {
    assignKey(to, from, key);
  });
  return to;
}