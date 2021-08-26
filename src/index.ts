import VfAlert, { AlertName } from "../packages/alert";

const PACKAGE = require("../package.json");
const components = [[AlertName, VfAlert]];

const install = function (Vue: any) {
  components.forEach((component) => {
    Vue.component(component[0], component[1]);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export const Alert = VfAlert;
export const version = PACKAGE.version;

export default {
  install,
  version: PACKAGE.version,
  VfAlert,
};
