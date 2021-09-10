import Icon from "./src/index.vue";

export const IconName = "VfIcon";

(Icon as any).install = function (Vue: any) {
  Vue.component(IconName, Icon);
};

export default Icon;
