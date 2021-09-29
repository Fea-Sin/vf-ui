# vf-tabs

仿 Chrome tab 组件，功能完善

## usage

```vue
<template>
  <div class="TBox">
    <div>VF-TABS</div>
    <vf-tabs v-model="activeName">
      <vf-tab-pane label="用户管理" name="first">
        用户管理
        <template slot="decor"><vf-icon name="loading" /></template>
      </vf-tab-pane>
      <vf-tab-pane label="权限管理" name="second">权限管理</vf-tab-pane>
      <vf-tab-pane label="任务" name="three">任务</vf-tab-pane>
    </vf-tabs>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      activeName: "first",
    };
  },
});
</script>
```

## api

### vf-tabs Attributes

| api      | type      | description    | 默认值  |
| -------- | --------- | -------------- | ------- |
| v-model  | `string`  | active tab     | -       |
| closable | `boolean` | 标签是否可关闭 | `false` |
| addable  | `boolean` | 标签是否可增加 | `false` |

### vf-tab-pane Attributes

| api   | type     | description     | 默认值 |
| ----- | -------- | --------------- | ------ |
| label | `string` | tab 标签        | -      |
| name  | `string` | tab active name | -      |

### vf-tab-pane Slots

| name  | 说明                                        |
| ----- | ------------------------------------------- |
| decor | tab 标签图标，可以是`<img />` or `<Icon />` |
