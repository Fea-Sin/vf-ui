<template>
  <li class="vf-task-folder" :class="[folder.leaf ? 'is-leaf' : 'is-folder']">
    <div class="title">
      <div class="lcon" @click="expand">
        <div class="decoration" v-if="!folder.leaf">
          <medal
            :type="folder.expanded ? 'expand' : 'cross'"
            :font-size="14"
            color="#999"
          />
        </div>
        <div class="text">{{ folder.title }}</div>
      </div>
    </div>
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
      暂无数据！
    </div>
  </li>
</template>
<script lang="ts">
import Vue from "vue";
import Medal from "../../medal";

export default Vue.extend({
  name: "folder",
  props: {
    folder: {
      type: Object,
      required: true,
    },
  },
  components: {
    Medal,
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
