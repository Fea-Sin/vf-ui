<template>
  <Input v-on="$listeners" v-bind="[$props, $attrs]">
    <slot name="default" />
    <template slot="prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </template>
    <template slot="append" v-if="$slots.append">
      <slot name="append"></slot>
    </template>
  </Input>
</template>
<script lang="ts">
import Vue from "vue";
import { Input } from "element-ui";

export default Vue.extend({
  components: {
    Input,
  },
});
</script>
<style lang="less" scoped>
@import "~element-ui/lib/theme-chalk/input.css";
</style>
