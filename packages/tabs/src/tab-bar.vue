<template>
  <div>
    <div class="vf-tabs__active-bar" :style="barStyle">Tab Bar</div>
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
