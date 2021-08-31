import { VFUIComponent } from "./component";

type IMedal = "cross" | "sub-line" | "expand";

export declare class VfMedal extends VFUIComponent {
  type: IMedal;
  fontSize: number;
  color: string;
}
