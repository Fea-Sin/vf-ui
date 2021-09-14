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
