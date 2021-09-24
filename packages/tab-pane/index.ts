import TabPane from "../tabs/src/tab-pane.vue";

export const TabPaneName = "VfTabPane";

(TabPane as any).install = function (Vue: any) {
  Vue.component(TabPaneName, TabPane);
};

export default TabPane;
