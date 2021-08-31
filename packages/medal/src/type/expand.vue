<template>
  <div class="medal-type medal-expand">
    <div class="out-path" :style="outStyle"></div>
    <div class="horizontal">
      <div class="path" :style="horizontalStyle"></div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { getPathWidth } from "../../../utils/utils";

export default Vue.extend({
  name: "expand",
  props: {
    fontSize: Number,
    color: String,
  },
  computed: {
    pathWidth() {
      return getPathWidth(this.fontSize);
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
  },
});
</script>
