import Vue from "vue";
import { VFUIComponent } from "./component";

import { VfAlert } from "./alert";

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