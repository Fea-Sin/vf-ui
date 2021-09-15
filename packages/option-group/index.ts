import OptionGroup from "./src/index.vue";
export const OptionGroupName = "VfOptionGroup";

(OptionGroup as any).install = function (Vue: any) {
  Vue.component(OptionGroupName, OptionGroup);
};

export default OptionGroup;
