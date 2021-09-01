<template>
  <div class="vf-medal" :style="medalStyle">
    <component
      :is="type"
      :color="color"
      :fontSize="fontSize"
      :text="text"
      :medalConfig="medalConfig"
    ></component>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import cross from "./type/cross.vue";
import expand from "./type/expand.vue";
import plus from "./type/plus.vue";
import minus from "./type/minus.vue";
import editor from "./type/editor.vue";
import status from "./type/status.vue";

export default Vue.extend({
  components: {
    cross,
    expand,
    plus,
    minus,
    editor,
    status,
  },
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
    text: String,
    medalConfig: Object,
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
