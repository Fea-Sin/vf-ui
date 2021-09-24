<template>
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
    <div class="vf-tabs-container"></div>
    <TabNav></TabNav>
    <TabPane></TabPane>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import TabNav from "./tab-nav.vue";
import TabPane from "./tab-pane.vue";

export default Vue.extend({
  components: {
    TabNav,
    TabPane,
  },
});
</script>
