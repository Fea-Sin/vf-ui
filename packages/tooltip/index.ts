import Tooltip from "./src/index.vue";

export const TooltipName = "VfTooltip";

(Tooltip as any).install = function (Vue: any) {
  Vue.component(TooltipName, Tooltip);
};

export default Tooltip;
