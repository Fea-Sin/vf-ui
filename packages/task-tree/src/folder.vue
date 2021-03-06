<template>
  <li
    class="vf-task-folder"
    :class="[folder.leaf ? 'is-leaf' : 'is-folder', `vf-${size}-task`]"
  >
    <div class="vf-task-title">
      <div :class="['lcon', folder.leaf ? 'leaf' : 'folder']" @click="expand">
        <div class="decoration" v-if="!folder.leaf">
          <medal
            :type="folder.expanded ? 'expand' : 'cross'"
            :font-size="iconSize.D"
            color="#999"
            class="medal"
          />
        </div>
        <div
          :class="['vf-task-text', folder.leaf ? 'leaf-text' : 'folder-text']"
          @click="() => taskRun(folder)"
        >
          <span v-if="folder.leaf && folder.status" class="vf-task-status">
            <medal
              type="status"
              :text="folder.status"
              color="#fff"
              :font-size="iconSize.S"
              :medal-config="{
                bgColor: folder.status === 'S' ? 'rgb(82, 228, 68)' : '#0fa8ce',
              }"
            />
          </span>
          <span class="vf-task-textspan" :style="titleStyle(folder.leaf)">
            {{ folder.title }}
          </span>
        </div>
      </div>
      <div :class="['rcon', folder.leaf ? 'leaf' : 'folder']">
        <div class="cell hover" @click="() => taskChange(folder)">
          <Popover v-model="editorPop" width="350">
            <div class="vf-task-operation-editor">
              <div class="operation-editor-input">
                <Input size="small" v-model="editorTitle">
                  <Button slot="append" @click="() => editorTaskHandle(folder)">
                    确定
                  </Button>
                </Input>
              </div>
            </div>
            <medal
              slot="reference"
              type="editor"
              :font-size="iconSize.BP"
              color="#545454"
            />
          </Popover>
        </div>
        <div class="cell hover padding" @click="() => taskRemove(folder)">
          <medal type="minus" :font-size="iconSize.P" color="#545454" />
        </div>
        <div
          class="cell hover padding"
          v-if="!folder.leaf && folder.created"
          @click="() => taskAdd(folder)"
        >
          <Popover width="350" v-model="addPop">
            <div class="vf-task-operation-add">
              <div>
                新增任务
                <span v-if="folder.createFolder">(文件夹)</span>
              </div>
              <div class="operation-add-input">
                <Input size="small" v-model="addTitle">
                  <Select
                    v-model="taskType"
                    placeholder="请选择"
                    slot="prepend"
                    v-if="folder.createFolder"
                  >
                    <Option label="文件夹" value="1"></Option>
                    <Option label="任务" value="2"></Option>
                  </Select>
                  <Button
                    slot="append"
                    @click="() => addTaskHandle(folder.createFolder)"
                  >
                    确定
                  </Button>
                </Input>
              </div>
            </div>
            <medal
              slot="reference"
              type="plus"
              :font-size="iconSize.P"
              color="#545454"
            />
          </Popover>
        </div>
      </div>
    </div>
    <ul
      :class="['sub-folder']"
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
        :size="size"
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
import Input from "../../input";
import Popover from "../../popover";
import Button from "../../button";
import Select from "../../select";
import Option from "../../option";
import { getTaskArrayIndex } from "../../utils/utils";

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
    size: String,
  },
  data() {
    return {
      editorPop: false,
      editorTitle: "",
      addPop: false,
      addTitle: "",
      taskType: "1",
    };
  },
  components: {
    Medal,
    Input,
    Popover,
    Button,
    Select,
    Option,
  },
  computed: {
    iconSize() {
      if (this.size === "large") {
        return {
          D: 18,
          S: 18,
          P: 20,
          BP: 28,
        };
      } else if (this.size === "small") {
        return {
          D: 14,
          S: 14,
          P: 16,
          BP: 24,
        };
      } else {
        return {
          D: 16,
          S: 16,
          P: 18,
          BP: 26,
        };
      }
    },
  },
  methods: {
    expand() {
      if (this.folder.leaf) {
        return;
      }
      this.folder.expanded = !this.folder.expanded;
    },
    titleStyle(leaf: boolean) {
      const size = this.size === "large" ? 18 : this.size === "small" ? 14 : 16;
      if (leaf) {
        return {
          fontSize: `${size - 2}px`,
        };
      } else {
        return {
          fontSize: `${size}px`,
        };
      }
    },
    taskRun(task: ITaskItem): void {
      if (this.onClick) {
        this.onClick(task);
      }
    },
    taskChange(task: ITaskItem) {
      this.editorTitle = task.title;
      if (this.onChange) {
        this.onChange(task);
      }
    },
    taskRemove(task: ITaskItem) {
      let currentNodeArray: ITaskItem[] =
        (this.$parent as any).folder && (this.$parent as any).folder.children;
      let index = getTaskArrayIndex(currentNodeArray, task);

      if (typeof index === "number") {
        this.$delete(currentNodeArray, index);
      }
      if (this.onRemove) {
        this.onRemove(task);
      }
    },
    taskAdd(task: ITaskItem) {
      if (this.onAdd) {
        this.onAdd(task);
      }
    },
    editorTaskHandle(task: ITaskItem) {
      console.log("修改名称--->", task);
      console.log("修改名称Input--->", this.editorTitle);
      task.title = this.editorTitle;
    },
    addTaskHandle(label: boolean) {
      console.log("增加任务---", label);
      let common = {
        title: this.addTitle,
        expanded: false,
      };
      let addObj = null;
      let currentNodeArray: ITaskItem[] = this.folder && this.folder.children;

      if (label && this.taskType === "1") {
        // 增加文件夹
        addObj = {
          ...common,
          leaf: false,
          created: true,
          children: [],
        };
      } else {
        // 增加任务
        addObj = {
          ...common,
          leaf: true,
        };
      }
      currentNodeArray.push(addObj);
      this.addTitle = "";
    },
  },
});
</script>
