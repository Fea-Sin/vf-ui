<template>
  <div class="container">
    <div class="header">{{ title }}</div>
    <div class="nav">
      <router-link to="/home" class="box">HOME</router-link>
      <router-link to="/com" class="box">ALERT</router-link>
      <router-link to="/task-tree" class="box">TASK-TREE</router-link>
      <router-link to="/medal" class="box">MEDAL</router-link>
      <router-link to="/tag" class="box">TAG</router-link>
      <router-link to="/icon" class="box">ICON</router-link>
      <router-link to="/input" class="box">INPUT</router-link>
      <router-link to="/button" class="box">BUTTON</router-link>
      <router-link to="/popover" class="box">POPOVER</router-link>
      <router-link to="/select" class="box">SELECT</router-link>
      <router-link to="/menu" class="box">MENU</router-link>
      <router-link to="/tooltip" class="box">TOOLTIP</router-link>
      <router-link to="/tabs" class="box">TABS</router-link>
      <router-link to="/tabs-b" class="box">TABS-B</router-link>
    </div>
    <div class="routeBox">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      title: "VF-UI",
    };
  },
});
</script>

<style lang="less" scoped>
.container {
  height: 100vh;
}
.header {
  height: 50px;
  text-align: center;
  font-size: 20px;
  line-height: 50px;
  color: rebeccapurple;
}
.nav {
  border: 1px dashed #ff516a;
  padding: 8px;
  .box {
    margin-left: 5px;
    margin-right: 5px;
    font-size: 18px;
    color: #647bfc;
    display: inline-block;
  }
}
.routeBox {
  min-height: 300px;
}
</style>
