<template>
  <i :class="'el-icon-' + name"></i>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    name: String,
  },
});
</script>
<style lang="less" scoped>
@import "~element-ui/lib/theme-chalk/icon.css";
</style>
