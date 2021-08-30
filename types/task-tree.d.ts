import { VFUIComponent } from "./component";

interface ITaskItem {
  name: string;
  leaf: boolean;
  expanded?: boolean;
  children?: Array<ITaskItem>;
}

export declare class VfTaskTree extends VFUIComponent {
  tasks: ITaskItem | Array<ITaskItem>;
}
