<template>
  <div class="con">
    <div>TEST INPUT</div>
    <div class="box">
      <h3 class="title">基础用法</h3>
      <Input v-model="myInput" placeholder="请输入内容" />
    </div>
    <div class="box">
      <h3 class="title">可清空</h3>
      <Input v-model="myInputa" clearable placeholder="请输入内容" />
    </div>
    <div class="box">
      <h3 class="title">密码框</h3>
      <Input v-model="myInputb" show-password></Input>
    </div>
    <div class="box">
      <h3 class="title">文本域</h3>
      <Input v-model="textarea" type="textarea" :rows="2"></Input>
    </div>
    <div class="box">
      <h3 class="title">复合型输入框</h3>
      <div class="item">
        <Input v-model="myInputc">
          <template slot="prepend">Http://</template>
        </Input>
      </div>
      <div class="item">
        <Input v-model="myInputd">
          <template slot="append">.com</template>
        </Input>
      </div>
      <div class="item">
        <Input v-model="myInpute">
          <Select v-model="mySelect" slot="prepend">
            <Option label="文件夹" value="1"></Option>
            <Option label="任务" value="2"></Option>
          </Select>
          <Button slot="append" icon="el-icon-search"></Button>
        </Input>
      </div>
    </div>
    <div class="box">
      <h3 class="title">尺寸</h3>
      <div class="item">
        <Input
          v-model="myInputf"
          suffix-icon="el-icon-date"
          size="medium"
        ></Input>
      </div>
      <div class="item">
        <Input
          v-model="myInputg"
          suffix-icon="el-icon-date"
          size="mini"
        ></Input>
      </div>
    </div>
    <div class="box">
      <h3 class="title">输入长度限制</h3>
      <Input v-model="myInputh" show-word-limit maxlength="10"></Input>
    </div>
    <div class="box">
      <h3>事件</h3>
      <div class="item">
        <Input v-model="myInputi" @input="myInputHandle"></Input>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Input, Select, Option, Button } from "@/index";

export default Vue.extend({
  components: {
    Input,
    Select,
    Option,
    Button,
  },
  data() {
    return {
      myInput: "",
      myInputa: "",
      myInputb: "",
      textarea: "",
      myInputc: "",
      myInputd: "",
      myInpute: "",
      myInputf: "",
      myInputg: "",
      myInputh: "",
      myInputi: "",
      mySelect: "",
    };
  },
  methods: {
    myInputHandle(value: string) {
      console.log("Input Input Event-->", value);
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
  width: 400px;
  margin-top: 16px;
  .title {
    margin-bottom: 10px;
  }
  .item {
    margin-bottom: 10px;
  }
}
</style>
<style lang="less">
.item {
  .el-select .el-input {
    width: 100px;
  }
}
</style>
