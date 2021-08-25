<template>
  <div>
    <div class="title">ALERT LIGHT</div>
    <div class="box">
      <Alert title="成功提示" type="success" />
    </div>
    <div class="box">
      <Alert title="消息文案" />
    </div>
    <div class="box">
      <Alert title="警告文字" type="warning" />
    </div>
    <div class="box">
      <Alert title="提示文字" type="error" />
    </div>
    <div class="title">ALERT DARK</div>
    <div class="box">
      <Alert title="成功提示" type="success" effect="dark" />
    </div>
    <div class="box">
      <Alert title="消息文案" effect="dark" />
    </div>
    <div class="box">
      <Alert title="警告文字" type="warning" effect="dark" />
    </div>
    <div class="box">
      <Alert title="提示文字" type="error" effect="dark" />
    </div>
    <div class="title">ALERT DESCRIPTION</div>
    <div class="box">
      <Alert
        title="THIS IS TITLE"
        type="error"
        description="这里可以写一些描述性文案"
      />
    </div>
    <div class="box">
      <Alert
        title="THIS IS TITLE"
        type="error"
        effect="dark"
        description="这里可以写一些描述性文案"
      />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Alert from "../../../packages/alert";

export default Vue.extend({
  components: {
    Alert,
  },
});
</script>

<style lang="less" scoped>
.title {
  padding: 16px;
  color: #545454;
}
.box {
  width: 500px;
  padding: 16px;
}
</style>
