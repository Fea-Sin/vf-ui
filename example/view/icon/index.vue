<template>
  <div class="con">
    <div>TEST ICON</div>
    <Icon name="edit" class="my-icon" />
    <Icon name="ice-cream-round" class="my-icon" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Icon } from "@/index";

export default Vue.extend({
  components: {
    Icon,
  },
});
</script>
<style lang="less" scoped>
.con {
  color: #545454;
  padding: 16px;
}
.my-icon {
  margin: 16px;
  font-size: 50px;
}
</style>
