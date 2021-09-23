import Tabs from "./src/index.vue";

export const TabsName = "VfTabs";

(Tabs as any).install = function (Vue: any) {
  Vue.component(TabsName, Tabs);
};

export default Tabs;
