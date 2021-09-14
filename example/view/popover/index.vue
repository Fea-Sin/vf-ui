<template>
  <div class="con">
    <div>TEST POPOVER</div>
    <Popover></Popover>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Popover } from "@/index";

export default Vue.extend({
  components: {
    Popover,
  },
});
</script>
<style lang="less" scoped>
.con {
  color: #545454;
  padding: 16px;
}
</style>
