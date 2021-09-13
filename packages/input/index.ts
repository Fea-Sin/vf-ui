import Input from "./src/index.vue";
export const InputName = "VfInput";

(Input as any).install = function (Vue: any) {
  Vue.component(InputName, Input);
};

export default Input;
