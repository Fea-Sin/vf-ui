# vf-alert

展示文本

```ts
type AlertType = "sucess" | "info" | "warning" | "error";

type AlertEffect = "light" | "dark";
```

## api

| api         | type        | description | 默认值  |
| ----------- | ----------- | ----------- | ------- |
| title       | string      | 标题        | -       |
| type        | AlertType   | 展示类型    | -       |
| description | string      | 附属描述    | -       |
| effect      | AlertEffect | 主题        | "light" |
