<template>
  <Option v-bind="[$props, $attrs]">
    <slot name="default" />
  </Option>
</template>
<script lang="ts">
import Vue from "vue";
import { Option } from "element-ui";

export default Vue.extend({
  components: {
    Option,
  },
});
</script>
<style lang="less" scoped>
@import "~element-ui/lib/theme-chalk/option.css";
</style>
