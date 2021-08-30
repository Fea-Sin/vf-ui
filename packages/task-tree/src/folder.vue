<template>
  <li class="vf-task-folder" :class="[folder.leaf ? 'is-leaf' : 'is-folder']">
    <span @click="expand" class="title">{{ folder.title }}</span>
    <ul
      class="sub-folder"
      v-if="folder.children && folder.children.length > 0"
      v-show="folder.expanded"
    >
      <folder
        v-for="child in folder.children"
        :folder="child"
        :key="child.title"
      />
    </ul>
    <div class="folder-empty" v-else v-show="!folder.leaf && folder.expanded">
      No Data
    </div>
  </li>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "folder",
  props: {
    folder: {
      type: Object,
      required: true,
    },
  },
  methods: {
    expand() {
      if (this.folder.leaf) {
        return;
      }
      this.folder.expanded = !this.folder.expanded;
    },
  },
});
</script>
