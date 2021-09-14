import VfAlert, { AlertName } from "../packages/alert";
import VfTaskTree, { TaskTreeName } from "../packages/task-tree";
import VfMedal, { MedalName } from "../packages/medal";
import VfTag, { TagName } from "../packages/tag";
import VfIcon, { IconName } from "../packages/icon";
import VfInput, { InputName } from "../packages/input";
import VfButton, { ButtonName } from "../packages/button";
import VfPopover, { PopoverName } from "../packages/popover";

const PACKAGE = require("../package.json");
const components = [
  [AlertName, VfAlert],
  [TaskTreeName, VfTaskTree],
  [MedalName, VfMedal],
  [TagName, VfTag],
  [IconName, VfIcon],
  [InputName, VfInput],
  [ButtonName, VfButton],
  [PopoverName, VfPopover],
];

const install = function (Vue: any): void {
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
export const Icon = VfIcon;
export const Input = VfInput;
export const Button = VfButton;
export const Popover = VfPopover;

export default {
  install,
  version: PACKAGE.version,
  VfAlert,
  VfTaskTree,
  VfMedal,
  VfTag,
  VfIcon,
  VfInput,
  VfButton,
  VfPopover,
};
