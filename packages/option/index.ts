import Option from "./src/index.vue";
export const OptionName = "VfOption";

(Option as any).install = function (Vue: any) {
  Vue.component(OptionName, Option);
};

export default Option;
