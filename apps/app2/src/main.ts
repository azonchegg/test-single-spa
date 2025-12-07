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
  }
});

const lifecycles = {
  bootstrap: vueLifecycles.bootstrap,
  mount: vueLifecycles.mount,
  unmount: vueLifecycles.unmount,
};

// For IIFE builds, assign to window BEFORE export
if (typeof window !== 'undefined') {
  (window as any).app2 = lifecycles;
  console.log('app2 assigned to window:', lifecycles);
}

// Export default only for IIFE compatibility
export default lifecycles;

