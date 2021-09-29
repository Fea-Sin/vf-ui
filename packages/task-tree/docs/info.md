# vf-task-tree

任务树，树形结构

## usage

```vue
<template>
  <div class="TBox test-tree">
    <div class="box">VF-TASK-TREE</div>
    <div class="box layout">
      <vf-task-tree :tasks="tasks" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      tasks: {
        title: "主目录",
        expanded: true,
        leaf: false,
        created: true,
        createFolder: true,
        children: [
          {
            title: "小明的文件夹",
            expanded: false,
            leaf: false,
            created: true,
            children: [
              {
                title: "M任务",
                expanded: false,
                leaf: true,
                status: "S",
              },
            ],
          },
          {
            title: "小红的文件夹",
            expanded: false,
            leaf: false,
            created: true,
            children: [
              {
                title: "H任务1",
                expanded: false,
                leaf: true,
              },
              {
                title: "H任务2",
                expanded: false,
                leaf: true,
              },
            ],
          },
        ],
      },
    };
  },
});
</script>
```

## api

```ts
interface Itasks {
  title: string;
  expanded: boolean;
  leaf: boolean;
  children: Array<Itasks>;
}

type ISize = "large" | "default" | "small";
```

| api      | type                   | description  | 默认值    |
| -------- | ---------------------- | ------------ | --------- |
| tasks    | Itasks                 | 分层数据     | -         |
| onClick  | (task: Itasks) => void | 点击事件     | -         |
| onChange | (task: Itasks) => void | 修改事件     | -         |
| onRemove | (task: Itasks) => void | 删除事件     | -         |
| onAdd    | (task: Itasks) => void | 增加事件     | -         |
| size     | ISize                  | 格式大小配置 | `default` |
