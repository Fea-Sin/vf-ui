<template>
  <ul class="vf-task-tree">
    <folder :folder="tasks" />
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
