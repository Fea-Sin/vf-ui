import Button from "./src/index.vue";
export const ButtonName = "VfButton";

(Button as any).install = function (Vue: any) {
  Vue.component(ButtonName, Button);
};

export default Button;
