<template>
  <li class="vf-task-folder" :class="[folder.leaf ? 'is-leaf' : 'is-folder']">
    <div class="vf-task-title">
      <div :class="['lcon', folder.leaf ? 'leaf' : 'folder']" @click="expand">
        <div class="decoration" v-if="!folder.leaf">
          <medal
            :type="folder.expanded ? 'expand' : 'cross'"
            :font-size="18"
            color="#999"
            class="medal"
          />
        </div>
        <div class="vf-task-text" @click="() => taskRun(folder)">
          <span v-if="folder.leaf && folder.status" class="vf-task-status">
            <medal
              type="status"
              :text="folder.status"
              color="#fff"
              :font-size="18"
              :medal-config="{
                bgColor: folder.status === 'S' ? 'rgb(82, 228, 68)' : '#0fa8ce',
              }"
            />
          </span>
          <span>{{ folder.title }}</span>
        </div>
      </div>
      <div class="rcon">
        <div class="cell hover" @click="() => taskChange(folder)">
          <medal type="editor" :font-size="28" color="#545454" />
        </div>
        <div class="cell hover padding" @click="() => taskRemove(folder)">
          <medal type="minus" :font-size="20" color="#545454" />
        </div>
        <div
          class="cell hover padding"
          v-if="!folder.leaf"
          @click="() => taskAdd(folder)"
        >
          <medal type="plus" :font-size="20" color="#545454" />
        </div>
      </div>
    </div>
    <ul
      class="sub-folder"
      v-if="folder.children && folder.children.length > 0"
      v-show="folder.expanded"
    >
      <folder
        v-for="child in folder.children"
        :folder="child"
        :key="child.title"
        :on-click="onClick"
        :on-change="onChange"
        :on-add="onAdd"
        :on-remove="onRemove"
      />
    </ul>
    <div class="folder-empty" v-else v-show="!folder.leaf && folder.expanded">
      暂无数据！
    </div>
  </li>
</template>
<script lang="ts">
import Vue from "vue";
import Medal from "../../medal";
import { ITaskItem } from "../../../types/task-tree";

export default Vue.extend({
  name: "folder",
  props: {
    folder: {
      type: Object,
      required: true,
    },
    onClick: Function,
    onChange: Function,
    onAdd: Function,
    onRemove: Function,
  },
  components: {
    Medal,
  },
  methods: {
    expand() {
      if (this.folder.leaf) {
        return;
      }
      this.folder.expanded = !this.folder.expanded;
    },
    taskRun(task: ITaskItem): void {
      if (this.onClick) {
        this.onClick(task);
      }
    },
    taskChange(task: ITaskItem) {
      if (this.onChange) {
        this.onChange(task);
      }
    },
    taskRemove(task: ITaskItem) {
      if (this.onRemove) {
        this.onRemove(task);
      }
    },
    taskAdd(task: ITaskItem) {
      if (this.onAdd) {
        this.onAdd(task);
      }
    },
  },
});
</script>
