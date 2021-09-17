import MenuItem from "./src/index.vue";
export const MenuItemName = "VfMenuItem";

(MenuItem as any).install = function (Vue: any) {
  Vue.component(MenuItemName, MenuItem);
};

export default MenuItem;
