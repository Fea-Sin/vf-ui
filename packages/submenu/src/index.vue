<template>
  <Submenu v-on="$listeners" v-bind="[$props, $attrs]">
    <slot name="default" />
    <template slot="title" v-if="$slots.title">
      <slot name="title"></slot>
    </template>
  </Submenu>
</template>
<script lang="ts">
import Vue from "vue";
import { Submenu } from "element-ui";
import menuMixin from "./menu-mixin";

export default Vue.extend({
  name: "ElSubmenu",
  componentName: "ElSubmenu",
  components: {
    Submenu,
  },
  mixins: [menuMixin],
  methods: {
    addSubmenu() {
      //
    },
    removeSubmenu() {
      //
    },
  },
});
</script>
<style lang="less" scoped></style>
