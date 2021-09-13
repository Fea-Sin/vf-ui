<template>
  <div class="con">
    <div>TEST BUTTON</div>
    <div class="box">
      <h3 class="title">基础用法</h3>
      <Button>默认按钮</Button>
      <Button type="danger">危险按钮</Button>
      <Button type="primary" icon="el-icon-edit" circle></Button>
      <Button disabled>默认按钮</Button>
    </div>
    <div class="box">
      <h3 class="title">文字按钮</h3>
      <Button type="text">文字按钮</Button>
    </div>
    <div class="box">
      <h3 class="title">加载中</h3>
      <Button type="warning" :loading="true">加载中</Button>
    </div>
    <div class="box">
      <h3 class="title">事件</h3>
      <Button @click="clickHandle">hello</Button>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Button } from "@/index";

export default Vue.extend({
  components: {
    Button,
  },
  methods: {
    clickHandle() {
      console.log("Button Handle Click--->");
    },
  },
});
</script>
<style lang="less" scoped>
.con {
  color: #545454;
  padding: 16px;
}
.box {
  padding-top: 16px;
  .title {
    padding-bottom: 10px;
  }
}
</style>
