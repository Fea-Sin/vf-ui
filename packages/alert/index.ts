import Alert from "./src/index.vue";

(Alert as any).install = function (Vue: any) {
  Vue.component(Alert.name, Alert);
};

export default Alert;
