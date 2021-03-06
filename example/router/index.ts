import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Layout from "../layout/index.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "HOME",
        component: () => import("../view/home/index.vue"),
      },
      {
        path: "com",
        name: "COM",
        component: () => import("E@/view/com/index.vue"),
      },
      {
        path: "task-tree",
        name: "TaskTree",
        component: () => import("E@/view/task-tree/index.vue"),
      },
      {
        path: "medal",
        name: "Medal",
        component: () => import("E@/view/medal/index.vue"),
      },
      {
        path: "tag",
        name: "Tag",
        component: () => import("E@/view/tag/index.vue"),
      },
      {
        path: "icon",
        name: "Icon",
        component: () => import("E@/view/icon/index.vue"),
      },
      {
        path: "input",
        name: "Input",
        component: () => import("E@/view/input/index.vue"),
      },
      {
        path: "button",
        name: "Button",
        component: () => import("E@/view/button/index.vue"),
      },
      {
        path: "popover",
        name: "Popover",
        component: () => import("E@/view/popover/index.vue"),
      },
      {
        path: "select",
        name: "Select",
        component: () => import("E@/view/select/index.vue"),
      },
      {
        path: "menu",
        name: "Menu",
        component: () => import("E@/view/menu/index.vue"),
      },
      {
        path: "tooltip",
        name: "Tooltip",
        component: () => import("E@/view/tooltip/index.vue"),
      },
      {
        path: "tabs",
        name: "Tabs",
        component: () => import("E@/view/tabs/index.vue"),
      },
      {
        path: "tabs-b",
        name: "Tabsb",
        component: () => import("E@/view/tabs/tabsb.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
