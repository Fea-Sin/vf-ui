<template>
  <OptionGroup v-bind="[$props, $attrs]">
    <slot name="default" />
  </OptionGroup>
</template>
<script lang="ts">
import Vue from "vue";
import { OptionGroup } from "element-ui";

export default Vue.extend({
  components: {
    OptionGroup,
  },
});
</script>
<style lang="less" scoped>
@import "~element-ui/lib/theme-chalk/option-group.css";
</style>
