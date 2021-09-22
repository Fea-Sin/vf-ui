<template>
  <Tooltip v-bind="[$props, $attrs]">
    <slot name="default" />
    <template slot="content" v-if="$slots.content">
      <slot name="content"></slot>
    </template>
  </Tooltip>
</template>
<script lang="ts">
import Vue from "vue";
import { Tooltip } from "element-ui";

export default Vue.extend({
  components: {
    Tooltip,
  },
});
</script>
<style lang="less" scoped>
@import "~element-ui/lib/theme-chalk/tooltip.css";
</style>
