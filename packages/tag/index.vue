<template>
  <div>
    <Tag>标签</Tag>
  </div>
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
