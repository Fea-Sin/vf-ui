# vf-task-tree

任务树，树形结构

## api

```ts
interface Itasks {
  title: string;
  expanded: boolean;
  leaf: boolean;
  children: Array<Itasks>;
}
```

| api      | type                   | description | 默认值 |
| -------- | ---------------------- | ----------- | ------ |
| tasks    | Itasks                 | 分层数据    | -      |
| onClick  | (task: Itasks) => void | 点击事件    | -      |
| onChange | (task: Itasks) => void | 修改事件    | -      |
| onRemove | (task: Itasks) => void | 删除事件    | -      |
| onAdd    | (task: Itasks) => void | 增加事件    | -      |
