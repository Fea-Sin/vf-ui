import { VFUIComponent } from "./component";

export interface ITaskItem {
  title: string;
  leaf: boolean;
  ITaskItem;
  expanded?: boolean;
  children?: Array<ITaskItem>;
}

export type ITaskItemAddNull = ITaskItem | null;

type ISize = "large" | "default" | "small";

export declare class VfTaskTree extends VFUIComponent {
  tasks: ITaskItem | Array<ITaskItem>;
  onClick: (task: ITaskItem) => void;
  onChange: (task: ITaskItem) => void;
  onAdd: (task: ITaskItem) => void;
  onRemove: (task: ITaskItem) => void;
  size: ISize;
}
