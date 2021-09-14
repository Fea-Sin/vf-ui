<template>
  <Popover v-on="$listeners" v-bind="[$props, $attrs]">
    <slot name="default" />
    <template slot="reference" v-if="$slots.reference">
      <slot name="reference"></slot>
    </template>
  </Popover>
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
