<template>
  <div class="con">
    <div>TEST POPOVER</div>
    <div class="box">
      <h3 class="title">基本使用</h3>
      <Popover title="标题" width="200" content="这是一段内容">
        <Button slot="reference">HELLO</Button>
      </Popover>
    </div>
    <div class="box">
      <h3 class="title">手动展示</h3>
      <Popover
        title="标题"
        width="200"
        content="这是一段内容..."
        trigger="manual"
        v-model="myPop"
      >
        <Button slot="reference" @click="myPop = !myPop">手动激活</Button>
      </Popover>
    </div>
    <div class="box">
      <h3 class="title">嵌套操作</h3>
      <Popover
        width="260"
        v-model="myB"
        placement="top-start"
        @show="showHandle"
      >
        <div>这是一段内容确定要删除吗？</div>
        <div class="mya">
          <Button size="mini" type="text" @click="myB = !myB">取消</Button>
          <Button size="mini" type="primary">确定</Button>
        </div>
        <Button slot="reference">删除</Button>
      </Popover>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Popover } from "@/index";
import { Button } from "@/index";

export default Vue.extend({
  components: {
    Popover,
    Button,
  },
  data() {
    return {
      myPop: false,
      myB: false,
    };
  },
  methods: {
    showHandle() {
      console.log("popover handle--->");
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
.mya {
  margin-top: 16px;
  text-align: center;
}
</style>
