<template>
  <div class="con">
    <div>TEST TABS</div>
    <Tabs>
      <TabPane label="用户管理" name="first">用户管理</TabPane>
    </Tabs>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Tabs, TabPane } from "@/index";

export default Vue.extend({
  components: {
    Tabs,
    TabPane,
  },
});
</script>
<style lang="less" scoped>
.con {
  color: #545454;
  padding: 16px;
}
</style>
