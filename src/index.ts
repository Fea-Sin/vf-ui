import Alert from "../packages/alert";

const { version } = require("../package.json");
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
  version,
  install,
  Alert,
};
