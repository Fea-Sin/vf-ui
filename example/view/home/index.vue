<template>
  <div class="home">
    <div class="box">{{ title }}</div>
    <div class="box">ALERT</div>
    <div class="box">TASK-TREE</div>
    <div class="box">MEDAL</div>
    <div class="box">TAG</div>
    <div class="box">ICON</div>
    <div class="box">INPUT</div>
    <div class="box">BUTTON</div>
    <div class="box">POPOVER</div>
    <div class="box">SELECT</div>
    <div class="box">MENU</div>
    <div class="box">SUBMENU</div>
    <div class="box">MENUITEM</div>
    <div class="box">MENUITEMGROUP</div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

const vfui = "VF - UI";

export default Vue.extend({
  data() {
    return {
      title: vfui,
    };
  },
});
</script>

<style lang="less" scoped>
.home {
  padding: 16px;
  color: #545454;
  padding-top: 0;
}
.box {
  margin-top: 16px;
  margin-bottom: 16px;
}
</style>
