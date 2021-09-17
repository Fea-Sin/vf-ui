import Menu from "./src/index.vue";
export const MenuName = "VfMenu";

(Menu as any).install = function (Vue: any) {
  Vue.component(MenuName, Menu);
};

export default Menu;
