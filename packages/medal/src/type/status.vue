<template>
  <div class="medal-type medal-status">
    <div class="status-back" :style="backStyle">
      <div class="status-text" v-if="text" :style="textStyle">
        {{ text }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { IMedalConfig } from "../../../../types/medal";

export default Vue.extend({
  name: "status",
  props: {
    fontSize: Number,
    color: String,
    medalConfig: Object,
    text: {
      type: String,
      default: "无",
    },
  },
  computed: {
    backStyle() {
      return {
        backgroundColor:
          this.medalConfig && (this.medalConfig as IMedalConfig).bgColor,
      };
    },
    textStyle() {
      return {
        fontSize: `${(this.fontSize as number) * 0.65}px`,
        color: this.color,
      };
    },
  },
});
</script>
