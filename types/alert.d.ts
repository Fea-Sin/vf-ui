import { VFUIComponent } from "./component";

export type AlertType = "success" | "warning" | "info" | "error";

export type AlertEffect = "dark" | "light";

export declare class VfAlert extends VFUIComponent {
  title: string;

  type: AlertType;

  description: string;

  effect: AlertEffect;
}
