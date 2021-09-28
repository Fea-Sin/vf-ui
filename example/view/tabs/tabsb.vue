<template>
  <div class="con">
    <div>TABS-B</div>
    <Tabs v-model="activeName">
      <TabPane label="用户管理" name="first">
        用户管理
        <template slot="decor">
          <img src="https://jestjs.io/img/favicon/favicon.ico" alt="" />
        </template>
      </TabPane>
      <TabPane label="配置管理" name="second">
        配置管理
        <template slot="decor">
          <Icon name="finished" />
        </template>
      </TabPane>
      <TabPane label="角色管理" name="three">
        <template slot="decor">
          <Icon name="s-custom" />
        </template>
        角色管理
      </TabPane>
    </Tabs>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Tabs, TabPane, Icon } from "@/index";

export default Vue.extend({
  components: {
    Tabs,
    TabPane,
    Icon,
  },
  data() {
    return {
      activeName: "three",
    };
  },
});
</script>
<style lang="less" scoped>
.con {
  color: #545454;
  padding: 16px;
}
</style>
