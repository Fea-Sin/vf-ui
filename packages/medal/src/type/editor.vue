<template>
  <div class="medal-type medal-editor">
    <div class="bottom-path" :style="bottomPathStyle"></div>
    <div class="main">
      <div class="top" :style="topStyle"></div>
      <div class="middle" :style="middleStyle"></div>
      <div class="bottom" :style="bottomStyle"></div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { getPathWidth } from "../../../utils/utils";

export default Vue.extend({
  name: "editor",
  props: {
    fontSize: Number,
    color: String,
  },
  computed: {
    bottomBorder(): number {
      return (this as any).fontSize / 10;
    },
    pathWidth() {
      return getPathWidth(this.fontSize) / 2;
    },
    bottomStyle() {
      return {
        borderColor: `${this.color} transparent transparent transparent`,
        borderWidth: `${(this as any).bottomBorder}px`,
      };
    },
    topStyle() {
      return {
        borderColor: this.color,
        borderWidth: `${(this as any).pathWidth}px`,
      };
    },
    middleStyle() {
      return {
        borderColor: this.color,
        borderWidth: `${(this as any).pathWidth}px`,
        borderBottomWidth: `${(this as any).pathWidth / 2}px`,
      };
    },
    bottomPathStyle() {
      return {
        backgroundColor: this.color,
        height: `${(this as any).pathWidth * 2}px`,
      };
    },
  },
});
</script>
