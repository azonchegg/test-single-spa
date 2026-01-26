import { h, createApp } from "vue";
import singleSpaVue from "single-spa-vue";
import App from "./App.vue";

// Get the container element - single-spa will pass it via props, but we can also get it directly
const getContainer = () => {
  return document.getElementById('single-spa-application') || document.body;
};

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App);
    },
  },
  handleInstance(app) {
    console.log('Vue app instance created for app2:', app);
  },
  // Use type assertion to bypass TypeScript check for domElementGetter
  ...({ domElementGetter: getContainer } as any),
});

const lifecycles = {
  bootstrap: async (props: any) => {
    console.log('app2 bootstrap called', props);
    return vueLifecycles.bootstrap(props);
  },
  mount: async (props: any) => {
    console.log('app2 mount called', props);
    const container = document.getElementById('single-spa-application');
    console.log('Mount container:', container);
    return vueLifecycles.mount(props);
  },
  unmount: async (props: any) => {
    console.log('app2 unmount called', props);
    return vueLifecycles.unmount(props);
  },
};

// Export for SystemJS format
export default lifecycles;
export const { bootstrap, mount, unmount } = lifecycles;
