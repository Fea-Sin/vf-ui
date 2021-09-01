<template>
  <div>
    <div class="box">TASK-TREE</div>
    <div class="box">无限层级</div>
    <div class="box">无限任务</div>
    <div class="box">无限状态</div>
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
            status: "F",
          },
          {
            title: "ZR任务2",
            expanded: false,
            leaf: true,
            status: "S",
          },
          {
            title: "ZR文件夹2",
            expanded: true,
            leaf: false,
            children: [
              {
                title: "ZR文件夹2子任务1",
                expanded: false,
                leaf: true,
                status: "S",
              },
              {
                title: "ZR文件夹2子任务2",
                expanded: false,
                leaf: false,
                children: [
                  {
                    title: "Flink 任务",
                    expanded: false,
                    leaf: true,
                    status: "F",
                  },
                ],
              },
              {
                title: "ZR文件夹2子任务3",
                expanded: false,
                leaf: true,
                status: "A",
              },
              {
                title: "ZR文件夹2子任务4",
                expanded: false,
                leaf: true,
                status: "D",
              },
            ],
          },
          {
            title: "ZR文件夹3",
            expanded: false,
            leaf: false,
            children: [
              {
                title: "ZR文件夹3任务1",
                expanded: false,
                leaf: true,
                status: "F",
              },
            ],
          },
          {
            title: "ZR特殊任务",
            expanded: false,
            leaf: true,
            status: "K",
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
