<template>
  <div class="con">
    <div>TEST MEDAL</div>
    <div class="box">
      <div class="cell">
        <medal type="cross" class="medal" :font-size="80" color="#545454" />
      </div>
    </div>
    <div class="box">
      <div class="cell">
        <medal type="expand" class="medal" :font-size="80" color="#545454" />
      </div>
    </div>
    <div class="box">
      <div class="cell">
        <medal type="plus" class="medal" :font-size="80" color="#545454" />
      </div>
    </div>
    <div class="box">
      <div class="cell">
        <medal type="minus" class="medal" :font-size="80" color="#545454" />
      </div>
    </div>
    <div class="box">
      <div class="cell">
        <medal type="editor" class="medal" :font-size="120" color="#0fa8ce" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Medal } from "@/index";

export default Vue.extend({
  components: {
    Medal,
  },
});
</script>
<style lang="less" scoped>
.con {
  color: #545454;
  padding: 16px;
}
.box {
  overflow: hidden;
  margin-top: 16px;
  float: left;
  margin-left: 16px;

  .cell {
    padding: 10px;
    width: 200px;
    height: 200px;
    background-color: #f7f5f3;
    display: flex;

    .medal {
      margin: auto;
    }
  }
}
</style>
