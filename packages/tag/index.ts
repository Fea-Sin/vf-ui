import Tag from "./src/index.vue";

export const TagName = "VfTag";

(Tag as any).install = function (Vue: any) {
  Vue.component(TagName, Tag);
};

export default Tag;
