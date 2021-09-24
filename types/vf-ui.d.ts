import Vue from "vue";
import { VFUIComponent } from "./component";

import { VfAlert } from "./alert";
import { VfTaskTree } from "./task-tree";
import { VfMedal } from "./medal";
import { VfTag } from "./tag";
import { VfIcon } from "./icon";
import { VfInput } from "./input";
import { VfButton } from "./button";
import { VfPopover } from "./popover";
import { VfSelect } from "./select";
import { VfOption } from "./option";
import { VfOptionGroup } from "./option-group";
import { VfMenu } from "./menu";
import { VfMenuItem } from "./menu-item";
import { VfSubmenu } from "./submenu";
import { VfTooltip } from "./tooltip";
import { VfTabs } from "./tabs";
import { VfTabPane } from "./tab-pane";

// The version
export const version: string;

/**
 * Install all vf-ui components into Vue
 * Please do not invoke this method directly
 * Call  `Vue.use(VFUI)` to install
 */
export function install(vue: typeof Vue): void;

// VFUI component common definition

export type Component = VFUIComponent;

export class Alert extends VfAlert {}

export class TaskTree extends VfTaskTree {}

export class Medal extends VfMedal {}

export class Tag extends VfTag {}

export class Icon extends VfIcon {}

export class Input extends VfInput {}

export class Button extends VfButton {}

export class Popover extends VfPopover {}

export class Select extends VfSelect {}

export class Option extends VfOption {}

export class OptionGroup extends VfOptionGroup {}

export class Menu extends VfMenu {}

export class MenuItem extends VfMenuItem {}

export class Submenu extends VfSubmenu {}

export class Tooltip extends VfTooltip {}

export class Tabs extends VfTabs {}

export class TabPane extends VfTabPane {}
