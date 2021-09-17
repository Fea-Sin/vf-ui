<template>
  <div class="con">
    <div>MENU</div>
    <div class="mybox">
      <Menu :default-active="menua" :collapse="true">
        <MenuItem index="1">处理</MenuItem>
        <MenuItem index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </MenuItem>

        <Submenu index="3">
          <template slot="title">工作</template>
          <MenuItem index="3-1">选项1</MenuItem>
          <MenuItem index="3-2">选项2</MenuItem>
        </Submenu>
      </Menu>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Menu, MenuItem, Submenu } from "@/index";

export default Vue.extend({
  components: {
    Menu,
    MenuItem,
    Submenu,
  },
  data() {
    return {
      menua: "1",
    };
  },
});
</script>
<style lang="less" scoped>
.con {
  color: #545454;
  padding: 16px;
}
.mybox {
  width: 200px;
}
</style>
