import { createRouter, createWebHistory } from "vue-router";
import HomeMain from "../views/HomeMain.vue";

const routes = [
  {
    path: "/",
    name: "HomeMain",
    component: HomeMain,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
