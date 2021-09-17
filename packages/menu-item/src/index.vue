<template>
  <MenuItem v-bind="[$props, $attrs]">
    <slot name="default" />
    <template slot="title" v-if="$slots.title">
      <slot name="title"></slot>
    </template>
  </MenuItem>
</template>
<script lang="ts">
import Vue from "vue";
import { MenuItem } from "element-ui";

export default Vue.extend({
  name: "ElMenuItem",
  componentName: "ElMenuItem",
  components: {
    MenuItem,
  },
});
</script>
<style lang="less" scoped>
@import "~element-ui/lib/theme-chalk/menu-item.css";
</style>
