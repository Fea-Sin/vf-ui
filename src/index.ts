import Alert from "../packages/alert";
import { version } from "../packages.json";

const components = [Alert];

const install = function (Vue: any) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  version: version,
  install,
  Alert,
};
