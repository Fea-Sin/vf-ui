<template>
  <div class="vf-alert" role="alert">
    <div class="vf-alert__content">
      <div class="vf-alert__title">
        <slot name="title">{{ title }}</slot>
      </div>
      <p class="vf-alert__description" v-if="$slots.default && !description">
        <slot></slot>
      </p>
      <p class="vf-alert__description" v-if="description && !$slots.default">
        {{ description }}
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "VfAlert",
  data() {
    return {
      visible: true,
    };
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    description: String,
  },
});
</script>
