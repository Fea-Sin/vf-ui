<template>
  <div>
    <div class="box">TASK-TREE</div>
    <div class="box">
      <task-tree />
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
});
</script>
<style lang="less" scoped>
.box {
  color: #545454;
  padding: 10px;
}
</style>
