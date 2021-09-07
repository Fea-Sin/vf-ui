<template>
  <ul class="vf-task-tree">
    <folder
      :folder="tasks"
      :on-click="onClick"
      :on-change="onChange"
      :on-add="onAdd"
      :on-remove="onRemove"
    />
  </ul>
</template>
<script lang="ts">
import Vue from "vue";
import folder from "./folder.vue";

export default Vue.extend({
  name: "VfTaskTree",
  props: {
    tasks: {
      type: Object,
      required: true,
    },
    onClick: Function,
    onChange: Function,
    onAdd: Function,
    onRemove: Function,
    size: {
      type: String,
      default: "default",
    },
  },
  components: {
    folder,
  },
  data() {
    return {
      initData: {
        title: "ZR文件夹",
        leaf: false,
        expanded: false,
      },
    };
  },
});
</script>
