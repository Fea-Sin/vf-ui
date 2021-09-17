<template>
  <Menu v-on="$listeners" v-bind="[$props, $attrs]" mode="vertical">
    <slot name="default" />
  </Menu>
</template>
<script lang="ts">
import Vue from "vue";
import { Menu } from "element-ui";

export default Vue.extend({
  name: "ElMenu",
  componentName: "ElMenu",
  components: {
    Menu,
  },
});
</script>
<style lang="less" scoped>
@import "~element-ui/lib/theme-chalk/menu.css";
</style>
