import Medal from "./src/index.vue";

export const MedalName = "VfMedal";

(Medal as any).install = function (Vue: any) {
  Vue.component(MedalName, Medal);
};

export default Medal;
