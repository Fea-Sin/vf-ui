<template>
  <div class="vf-medal" :style="medalStyle">
    <component :is="type" :color="color" :fontSize="fontSize"></component>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import cross from "./type/cross.vue";
import expand from "./type/expand.vue";

export default Vue.extend({
  props: {
    type: {
      type: String,
      required: true,
    },
    fontSize: {
      type: Number,
      default: 16,
    },
    color: String,
  },
  components: {
    cross,
    expand,
  },
  computed: {
    medalStyle() {
      let width = "16px";
      let height = "16px";
      if (this.fontSize && typeof this.fontSize) {
        width = `${this.fontSize}px`;
        height = `${this.fontSize}px`;
      }
      return {
        width,
        height,
      };
    },
  },
});
</script>
