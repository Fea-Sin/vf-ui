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
