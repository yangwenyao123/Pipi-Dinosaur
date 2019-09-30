import Vue from 'vue';
import PiDialog from './main';
import { isServer, isInDocument } from '../utils';


let instance;

function initInstance() {
  if (instance) {
    instance.$destroy();
  }
  instance = new (Vue.extend(PiDialog))({
    el: document.createElement('div'),
    // avoid missing animation when first rendered
    propsData: {
      lazyRender: false
    }
  });
  instance.$on('input', value => {
    instance.value = value;
  });
  document.body.append(instance.$el);
}

function Dialog(options) {
  /* istanbul ignore if */
  if (isServer) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    if (!instance || !isInDocument(instance.$el)) {
      initInstance();
    }
    Object.assign(instance, Dialog.currentOptions, options, {
      resolve,
      reject
    });
  });
}

Dialog.defaultOptions = {
  value: true,
  title: '',
  message: '',
  beforeClose: null,
  cancelButtonText: '',
  cancelButtonColor: null,
  confirmButtonText: '',
  confirmButtonColor: null,
  showConfirmButton: true,
  showCancelButton: false,
  callback: action => {
    instance[action === 'confirm' ? 'resolve' : 'reject'](action);
  }
};

Dialog.alert = Dialog;

Dialog.confirm = options => Dialog({
  showCancelButton: true,
  ...options
});

Dialog.close = () => {
  if (instance) {
    instance.value = false;
  }
};

Dialog.setDefaultOptions = options => {
  Object.assign(Dialog.currentOptions, options);
};

Dialog.resetDefaultOptions = () => {
  Dialog.currentOptions = { ...Dialog.defaultOptions };
};

Dialog.resetDefaultOptions();

Dialog.install = function(Vue) {
  Vue.component(PiDialog.name, PiDialog);
};
Vue.prototype.$dialog = Dialog;

export default Dialog;