import { VFUIComponent } from "./component";

interface ITaskItem {
  title: string;
  leaf: boolean;
  expanded?: boolean;
  children?: Array<ITaskItem>;
}

type ISize = "large" | "default" | "small";

export declare class VfTaskTree extends VFUIComponent {
  tasks: ITaskItem | Array<ITaskItem>;
  onClick: (task: ITaskItem) => void;
  onChange: (task: ITaskItem) => void;
  onAdd: (task: ITaskItem) => void;
  onRemove: (task: ITaskItem) => void;
  size: ISize;
}
