import Submenu from "./src/index.vue";
export const SubmenuName = "VfSubmenu";

(Submenu as any).install = function (Vue: any) {
  Vue.component(SubmenuName, Submenu);
};

export default Submenu;
