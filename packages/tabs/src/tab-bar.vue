<template>
  <div>
    <div class="vf-tabs__active-bar" :style="barStyle">Tab Bar</div>
    <div class="vf-tabs">
      <div class="vf-tabs-panel">
        <div class="vf-tabs-tab">
          <div class="vf-tabs-tab-icon">
            <img src="https://jestjs.io/img/favicon/favicon.ico" alt="" />
          </div>
          <span>The Jest Object9</span>
          <div class="vf-tabs-tab-close">+</div>
          <div class="vf-tabs-tab-line"></div>
        </div>
        <div class="vf-tabs-tab">
          <div class="vf-tabs-tab-icon">
            <i class="el-icon-camera"></i>
          </div>
          <span>ChromeTab分栏实现</span>
          <div class="vf-tabs-tab-close">+</div>
          <div class="vf-tabs-tab-line"></div>
        </div>
        <div class="vf-tabs-tab active">
          <div class="vf-tabs-tab-icon"></div>
          <span>chokcoco（Coco）</span>
          <div class="vf-tabs-tab-close">+</div>
          <div class="vf-tabs-tab-line"></div>
        </div>
        <div class="vf-tabs-tab">
          <div class="vf-tabs-tab-icon"></div>
          <span>feasin（FeaSin）</span>
          <div class="vf-tabs-tab-close">+</div>
          <div class="vf-tabs-tab-line"></div>
        </div>
      </div>
    </div>

    <div class="con">
      <div>TEST TABS</div>
      <Tabs v-model="activeName" addable>
        <TabPane label="用户管理" name="first" :closable="false">
          用户管理
          <template slot="decor">
            <img src="https://jestjs.io/img/favicon/favicon.ico" alt="" />
          </template>
        </TabPane>
        <TabPane label="配置管理" name="second" :closable="true">
          配置管理
          <div class="boxa">
            <Button type="primary">按钮</Button>
          </div>
        </TabPane>
        <TabPane label="角色管理" name="three">
          <template slot="decor">
            <Icon name="s-custom" />
          </template>
          角色管理
        </TabPane>
        <TabPane label="定时任务" name="four">
          定时任务
          <template slot="decor">
            <Icon name="edit" />
          </template>
        </TabPane>
        <TabPane label="定时任务运行补偿管理" name="five" :closable="false">
          定时任务运行补偿管理
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    tabs: Array,
  },
  computed: {
    barStyle() {
      let style = {};

      return style;
    },
  },
});
</script>
