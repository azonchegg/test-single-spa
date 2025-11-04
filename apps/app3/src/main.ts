import { createApp, h } from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './App.vue';

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
      });
    },
  },
  handleInstance: (app) => {
  },
});

const lifecycles = {
  bootstrap: vueLifecycles.bootstrap,
  mount: vueLifecycles.mount,
  unmount: vueLifecycles.unmount,
};

export default lifecycles;
export const { bootstrap, mount, unmount } = lifecycles;

if (typeof window !== 'undefined') {
  (window as any).app3 = lifecycles;
}

