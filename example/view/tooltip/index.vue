<template>
  <div class="con">
    <div>TEST TOOLTIP</div>
    <div class="box">
      <h3 class="title">基础用法</h3>
      <Tooltip content="提示文字">
        <Button>基础</Button>
      </Tooltip>
    </div>
    <div class="box">
      <h3 class="title">主题</h3>
      <Tooltip content="提示文字" placement="top">
        <Button>Dark</Button>
      </Tooltip>
      <Tooltip placement="right" content="提示文字" effect="light">
        <Button>Light</Button>
      </Tooltip>
    </div>
    <div class="box">
      <h3 class="title">更多Content</h3>
      <Tooltip>
        <Button>更多</Button>
        <div slot="content">
          <div>第一行内容</div>
          <div>第二行内容</div>
        </div>
      </Tooltip>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Tooltip, Button } from "@/index";

export default Vue.extend({
  components: {
    Tooltip,
    Button,
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
    margin-bottom: 10px;
  }
}
</style>
