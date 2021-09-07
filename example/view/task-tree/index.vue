<template>
  <div>
    <div class="box">TASK-TREE</div>
    <div class="box">无限层级</div>
    <div class="box">无限任务</div>
    <div class="box">无限状态</div>
    <div class="box-task">
      <task-tree
        :tasks="tasks"
        :on-click="taskClick"
        :on-change="taskChange"
        :on-remove="taskRemove"
        :on-add="taskAdd"
      />
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
        title: "ZR文件夹55555566689898",
        leaf: false,
        expanded: true,
        created: true,
        children: [
          {
            title: "ZR任务1989898989897",
            expanded: false,
            leaf: true,
          },
          {
            title: "ZR任务2898989898990",
            expanded: false,
            leaf: true,
            status: "S",
          },
          {
            title: "ZR文件夹2",
            expanded: false,
            leaf: false,
            created: true,
            children: [
              {
                title: "ZR文件夹2子任务1",
                expanded: false,
                leaf: true,
                status: "S",
              },
              {
                title: "ZR文件夹2子任务3",
                expanded: false,
                leaf: true,
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
            created: true,
            children: [
              {
                title: "ZR文件夹3任务1",
                expanded: false,
                leaf: true,
              },
            ],
          },
          {
            title: "ZR特殊任务",
            expanded: false,
            leaf: true,
          },
        ],
      },
    };
  },
  methods: {
    taskClick(task: any) {
      console.log("任务click---->", task);
    },
    taskChange(task: any) {
      console.log("任务change---->", task);
    },
    taskRemove(task: any) {
      console.log("任务remove--->", task);
    },
    taskAdd(task: any) {
      console.log("任务add--->", task);
    },
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
  width: 350px;
  background-color: #f2f2f2;
}
</style>
