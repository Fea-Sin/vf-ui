<template>
  <Button v-on="$listeners" v-bind="[$props, $attrs]">
    <slot name="default" />
  </Button>
</template>
<script lang="ts">
import Vue from "vue";
import { Button } from "element-ui";

export default Vue.extend({
  components: {
    Button,
  },
});
</script>
<style lang="less" scoped>
@import "~element-ui/lib/theme-chalk/button.css";
</style>
