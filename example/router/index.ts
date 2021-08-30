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
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
