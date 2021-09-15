import VfAlert, { AlertName } from "../packages/alert";
import VfTaskTree, { TaskTreeName } from "../packages/task-tree";
import VfMedal, { MedalName } from "../packages/medal";
import VfTag, { TagName } from "../packages/tag";
import VfIcon, { IconName } from "../packages/icon";
import VfInput, { InputName } from "../packages/input";
import VfButton, { ButtonName } from "../packages/button";
import VfPopover, { PopoverName } from "../packages/popover";
import VfSelect, { SelectName } from "../packages/select";
import VfOption, { OptionName } from "../packages/option";
import VfOptionGroup, { OptionGroupName } from "../packages/option-group";

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
  [SelectName, VfSelect],
  [OptionName, VfOption],
  [OptionGroupName, VfOptionGroup],
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
export const Select = VfSelect;
export const Option = VfOption;
export const OptionGroup = VfOptionGroup;

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
  VfSelect,
  VfOption,
  VfOptionGroup,
};
