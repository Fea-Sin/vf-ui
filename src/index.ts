import VfAlert, { AlertName } from "../packages/alert";
import VfTaskTree, { TaskTreeName } from "../packages/task-tree";
import VfMedal, { MedalName } from "../packages/medal";
import VfTag, { TagName } from "../packages/tag";

const PACKAGE = require("../package.json");
const components = [
  [AlertName, VfAlert],
  [TaskTreeName, VfTaskTree],
  [MedalName, VfMedal],
  [TagName, VfTag],
];

const install = function (Vue: any) {
  components.forEach((component) => {
    Vue.component(component[0], component[1]);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export const version = PACKAGE.version;
export const Alert = VfAlert;
export const TaskTree = VfTaskTree;
export const Medal = VfMedal;
export const Tag = VfTag;

export default {
  install,
  version: PACKAGE.version,
  VfAlert,
  VfTaskTree,
  VfMedal,
  VfTag,
};
