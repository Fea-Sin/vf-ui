import Alert from "./src/index.vue";

export const AlertName = "VfAlert";

(Alert as any).install = function (Vue: any) {
  Vue.component(AlertName, Alert);
};

export default Alert;
