<template>
  <Tag v-on="$listeners" v-bind="[$props, $attrs]">
    <slot name="default" />
  </Tag>
</template>
<script lang="ts">
import Vue from "vue";
import { Tag } from "element-ui";

export default Vue.extend({
  components: {
    Tag,
  },
});
</script>
<style lang="less" scoped>
@import "~element-ui/lib/theme-chalk/tag.css";
</style>
