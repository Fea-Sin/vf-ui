<template>
  <div
    class="vf-tabs__pane"
    v-show="active"
    role="tabpane"
    :id="`pane-${paneName}`"
  >
    <slot></slot>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "VfTabsPane",
  componentName: "VfTabsPane",
  props: {
    label: String,
    labelContent: Function,
    name: String,
    closable: Boolean,
    disabled: Boolean,
  },
  data() {
    return {
      index: null,
      loaded: false,
    };
  },
  computed: {
    isClosable() {
      return this.closable || (this.$parent as any).closable;
    },
    active() {
      const active =
        (this.$parent as any).currentName ===
        (this.name || (this as any).index);
      if (active) {
        (this as any).loaded = true;
      }
      return active;
    },
    paneName() {
      return this.name || (this as any).index;
    },
  },
});
</script>
