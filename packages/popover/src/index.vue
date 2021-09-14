<template>
  <div>
    <div>POPOVER</div>
    <Popover></Popover>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Popover } from "element-ui";

export default Vue.extend({
  components: {
    Popover,
  },
});
</script>
<style lang="less" scoped>
@import "~element-ui/lib/theme-chalk/popover.css";
</style>
