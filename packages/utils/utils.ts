import { ITaskItem } from "../../types/task-tree";

/**
 * @param size: number
 * @returns pathWidht: number
 * @description Medal path width
 *
 */
export function getPathWidth(size: number): number {
  let width = 1;
  if (size >= 150) {
    width = 10;
  } else if (size >= 50 && size < 150) {
    width = 4;
  } else if (size >= 30 && size < 50) {
    width = 2;
  }
  return width;
}

/**
 * ts 的好处多多
 * 类型检测
 * 思路检查
 * 代码检测
 */

/**
 * root get node and index
 */
type getRestNode = [ITaskItem[] | null, number | null];
export function getRootNode(root: ITaskItem, target: ITaskItem): getRestNode {
  let rest = null;
  let countIndex = null;
  if (root) {
    if (Array.isArray(root.children)) {
      const contentNode = root.children;
      for (let i = 0; i < contentNode.length; i++) {
        if (target.title === contentNode[i].title) {
          rest = contentNode;
          countIndex = i;
          return [rest, countIndex];
        } else if (contentNode[i].children) {
          return getRootNode(contentNode[i], target);
        }
      }
    }
  }
  return [rest, countIndex];
}

/**
 * get ITaskItemArray match index
 *
 */
export function getTaskArrayIndex(
  taskArray: ITaskItem[],
  target: ITaskItem
): number | null {
  if (Array.isArray(taskArray)) {
    for (let i = 0; i < taskArray.length; i++) {
      if (target.title === taskArray[i].title) {
        return i;
      }
    }
  }
  return null;
}
