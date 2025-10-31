import { importShared } from './__federation_fn_import-Dohbn7pL.js';
import { A as App } from './App-B1UeU1yI.js';

const React = await importShared('react');
const {useEffect,useRef} = React;

const {createApp} = await importShared('vue');
const VueWrapper = () => {
  const vueContainer = useRef(null);
  const vueApp = useRef(null);
  useEffect(() => {
    if (vueContainer.current && !vueApp.current) {
      vueApp.current = createApp(App);
      vueApp.current.mount(vueContainer.current);
    }
    return () => {
      if (vueApp.current) {
        vueApp.current.unmount();
        vueApp.current = null;
      }
    };
  }, []);
  return /* @__PURE__ */ React.createElement("div", { ref: vueContainer });
};

export { VueWrapper as default };
