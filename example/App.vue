<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  created(): void {
    console.log("VF-UI App Created");
  },
  mounted(): void {
    console.log("VF-UI App Mounted");
  },
});
</script>

<style scoped>
.example {
  color: rebeccapurple;
  font-size: 30px;
  text-align: center;
}
.content {
  padding: 10px;
  text-align: left;
}
.app {
  height: 100vh;
}
</style>
