import { VFUIComponent } from "./component";

export type IMedal =
  | "cross"
  | "expand"
  | "plus"
  | "minus"
  | "editor"
  | "status";

export interface IMedalConfig {
  bgColor?: string;
}
export declare class VfMedal extends VFUIComponent {
  type: IMedal;
  fontSize: number;
  color: string;
  text: string;
  medalConfig: IMedalConfig;
}
