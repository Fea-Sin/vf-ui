import { VFUIComponent } from "./component";

export declare class VfTabs extends VFUIComponent {
  closable: boolean;
  addable: boolean;
  beforeLeave: () => boolean | Promise<any>;
}
