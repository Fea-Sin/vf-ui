<template>
  <div class="con">
    <div>TEST TABS</div>
    <Tabs></Tabs>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Tabs } from "@/index";

export default Vue.extend({
  components: {
    Tabs,
  },
});
</script>
<style lang="less" scoped>
.con {
  color: #545454;
  padding: 16px;
}
</style>
