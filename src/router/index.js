import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/like",
    name: "AnimalLike",
    component: () => import("@/views/AnimalLike.vue"),
  },
  {
    path: "/",
    name: "HomeMain",
    component: () => import("@/views/HomeMain.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
