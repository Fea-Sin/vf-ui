import TaskTree from "./src/index.vue";

export const TaskTreeName = "VfTaskTree";

(TaskTree as any).install = function (Vue: any) {
  Vue.component(TaskTreeName, TaskTree);
};

export default TaskTree;
