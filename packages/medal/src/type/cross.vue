<template>
  <div class="medal-type medal-cross">
    <div class="out-path" :style="outStyle"></div>
    <div class="horizontal">
      <div class="path" :style="horizontalStyle"></div>
    </div>
    <div class="vertical">
      <div class="path" :style="verticalStyle"></div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "cross",
  props: {
    color: String,
    fontSize: Number,
  },
  computed: {
    pathWidth() {
      let width = 1;
      if (this.fontSize >= 150) {
        width = 10;
      } else if (this.fontSize >= 50 && this.fontSize < 150) {
        width = 4;
      } else if (this.fontSize >= 30 && this.fontSize < 50) {
        width = 2;
      } else {
        width = 1;
      }
      return width;
    },
    outStyle() {
      return {
        borderColor: this.color,
        borderWidth: `${(this as any).pathWidth}px`,
      };
    },
    horizontalStyle() {
      return {
        backgroundColor: this.color,
        height: `${(this as any).pathWidth}px`,
      };
    },
    verticalStyle() {
      return {
        backgroundColor: this.color,
        width: `${(this as any).pathWidth}px`,
      };
    },
  },
});
</script>
