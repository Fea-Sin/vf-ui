<template>
  <div class="con">
    <div>TAG TEST</div>
    <div class="box">
      <h3>基础用法</h3>
      <Tag @click="handleClick" class="my-tag">hello</Tag>
      <Tag type="success">标签二</Tag>
    </div>
    <div class="box">
      <h3>可移除标签</h3>
      <Tag type="info" closable @close="handleClose">标签三</Tag>
    </div>
    <div class="box">
      <h3>不同尺寸</h3>
      <Tag closable type="warning">默认标签</Tag>
      <Tag closable size="medium">中等标签</Tag>
    </div>
    <div class="box">
      <h3>不同主题</h3>
      <Tag type="danger" effect="dark">标签</Tag>
      <Tag effect="plain">标签</Tag>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Tag } from "@/index";

export default Vue.extend({
  components: {
    Tag,
  },
  methods: {
    handleClick() {
      console.log("Tag Click!");
    },
    handleClose() {
      console.log("Tag Close--->");
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

  h3 {
    padding-bottom: 8px;
  }
}
.my-tag {
  cursor: pointer;
}
</style>
