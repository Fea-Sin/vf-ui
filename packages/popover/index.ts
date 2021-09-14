import Popover from "./src/index.vue";
export const PopoverName = "VfPopover";

(Popover as any).install = function (Vue: any) {
  Vue.component(PopoverName, Popover);
};

export default Popover;
