# vf-tabs

仿 Chrome tab 组件，功能完善

## api

### Tabs Attributes

| api      | type      | description    | 默认值  |
| -------- | --------- | -------------- | ------- |
| v-model  | `string`  | active tab     | -       |
| closable | `boolean` | 标签是否可关闭 | `false` |
| addable  | `boolean` | 标签是否可增加 | `false` |

### TabPane Attributes

| api   | type     | description     | 默认值 |
| ----- | -------- | --------------- | ------ |
| label | `string` | tab 标签        | -      |
| name  | `string` | tab active name | -      |

### TabPane Slots

| name  | 说明                                        |
| ----- | ------------------------------------------- |
| decor | tab 标签图标，可以是`<img />` or `<Icon />` |
