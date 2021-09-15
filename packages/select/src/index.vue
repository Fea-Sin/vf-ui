<template>
  <Select v-on="$listeners" v-bind="[$props, $attrs]">
    <slot name="default" />
    <template slot="prefix" v-if="$slots.prefix">
      <slot name="prefix"></slot>
    </template>
    <template slot="empty" v-if="$slots.empty">
      <slot name="empty"></slot>
    </template>
  </Select>
</template>
<script lang="ts">
import Vue from "vue";
import { Select } from "element-ui";

export default Vue.extend({
  components: {
    Select,
  },
});
</script>
<style lang="less" scoped>
@import "~element-ui/lib/theme-chalk/select.css";
</style>
