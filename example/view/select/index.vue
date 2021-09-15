<template>
  <div class="con">
    <div>TEST SELECT</div>
    <div class="box">
      <h3 class="title">基础用法</h3>
      <Select v-model="opa" placeholder="任务选择">
        <Option
          v-for="item in myOpa"
          :key="item.value"
          :value="item.value"
          :label="item.label"
          :disabled="item.disabled"
        ></Option>
      </Select>
    </div>
    <div class="box">
      <h3 class="title">基础多选</h3>
      <Select v-model="opb" multiple>
        <Option
          v-for="item in myOpb"
          :key="item.value"
          :value="item.value"
          :label="item.label"
        ></Option>
      </Select>
    </div>
    <div class="box">
      <h3 class="title">自定义模版</h3>
      <Select v-model="opc">
        <Option
          v-for="item in myOpc"
          :key="item.value"
          :value="item.value"
          :label="item.label"
        >
          <span style="float: left">{{ item.label }}</span>
          <span style="float: right; color: #8492a6; font-size: 16px">
            {{ item.value }}
          </span>
        </Option>
      </Select>
    </div>
    <div class="box">
      <h3 class="title">分组</h3>
      <Select v-model="opd">
        <OptionGroup
          v-for="group in myOpd"
          :key="group.label"
          :label="group.label"
        >
          <Option
            v-for="item in group.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></Option>
        </OptionGroup>
      </Select>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Select, Option, OptionGroup } from "@/index";

export default Vue.extend({
  components: {
    Select,
    Option,
    OptionGroup,
  },
  data() {
    return {
      myOpa: [
        {
          value: "a1",
          label: "黄金糕",
        },
        {
          value: "a2",
          label: "龙须面",
        },
        {
          value: "a3",
          label: "北京烤鸭",
          disabled: true,
        },
      ],
      opa: "",
      myOpb: [
        {
          value: "a1",
          label: "黄金糕",
        },
        {
          value: "a2",
          label: "龙须面",
        },
        {
          value: "a3",
          label: "北京烤鸭",
        },
      ],
      opb: [],
      myOpc: [
        {
          value: "Beijing",
          label: "北京",
        },
        {
          value: "Shanghai",
          label: "上海",
        },
        {
          value: "Chengdu",
          label: "成都",
        },
      ],
      opc: "",
      myOpd: [
        {
          label: "热门城市",
          options: [
            {
              value: "Shanghai",
              label: "上海",
            },
            {
              value: "Beijing",
              label: "北京",
            },
          ],
        },
        {
          label: "城市名",
          options: [
            {
              value: "Chengdu",
              label: "成都",
            },
            {
              value: "Shenzhen",
              label: "深圳",
            },
            {
              value: "Guangzhou",
              label: "广州",
            },
            {
              value: "Dalian",
              label: "大连",
            },
            {
              value: "Qingdao",
              label: "青岛",
            },
          ],
        },
      ],
      opd: "",
    };
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
