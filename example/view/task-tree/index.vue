<template>
  <div>
    <div class="box">TASK-TREE</div>
    <div class="box-task">
      <task-tree :tasks="tasks" />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { TaskTree } from "@/index";
export default Vue.extend({
  components: {
    TaskTree,
  },
  data() {
    return {
      tasks: {
        title: "ZR文件夹",
        leaf: false,
        expanded: true,
        children: [
          {
            title: "ZR任务1",
            expanded: false,
            leaf: true,
          },
          {
            title: "ZR任务2",
            expanded: true,
            leaf: false,
            children: [
              {
                title: "ZR任务2子任务",
                expanded: false,
                leaf: true,
              },
            ],
          },
          {
            title: "ZR任务3",
            expanded: false,
            leaf: false,
            children: [],
          },
        ],
      },
    };
  },
});
</script>
<style lang="less" scoped>
.box {
  color: #545454;
  padding: 10px;
}
.box-task {
  padding-left: 10px;
  width: 450px;
}
</style>
