import Select from "./src/index.vue";
export const SelectName = "VfSelect";

(Select as any).install = function (Vue: any) {
  Vue.component(SelectName, Select);
};

export default Select;
