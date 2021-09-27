<template>
  <div class="con">
    <div>TEST TABS</div>
    <Tabs v-model="activeName">
      <TabPane label="用户管理" name="first">用户管理</TabPane>
      <TabPane label="配置管理" name="second">
        配置管理
        <div class="boxa">
          <Button type="primary">按钮</Button>
        </div>
      </TabPane>
      <TabPane label="角色管理" name="three">角色管理</TabPane>
      <TabPane label="定时任务" name="four">定时任务</TabPane>
    </Tabs>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Tabs, TabPane, Button } from "@/index";

export default Vue.extend({
  components: {
    Tabs,
    TabPane,
    Button,
  },
  data() {
    return {
      activeName: "first",
    };
  },
});
</script>
<style lang="less" scoped>
.con {
  color: #545454;
  padding: 16px;
}
.boxa {
  width: 800px;
  height: 350px;
  border: 1px solid #e3e2e1;
  padding: 10px;
  margin-top: 10px;
}
</style>
