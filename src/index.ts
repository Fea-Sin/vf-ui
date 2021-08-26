import Alert, { AlertName } from "../packages/alert";

const { version } = require("../package.json");
const components = [[AlertName, Alert]];

const install = function (Vue: any) {
  components.forEach((component) => {
    Vue.component(component[0], component[1]);
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
