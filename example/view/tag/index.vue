<template>
  <div class="con">
    <div>TAG TEST</div>
    <div class="box">
      <Tag />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Tag from "../../../packages/tag/index.vue";

export default Vue.extend({
  components: {
    Tag,
  },
});
</script>
<style lang="less" scoped>
.con {
  color: #545454;
  padding: 16px;
}
.box {
  padding: 16px 0;
}
</style>
