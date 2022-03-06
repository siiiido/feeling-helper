import { createRouter, createWebHistory } from "vue-router";
import HomeMain from "../views/HomeMain.vue";
import AnimalLike from "../components/AnimalLike.vue";

const routes = [
  {
    path: "/",
    name: "HomeMain",
    component: HomeMain,
  },
  {
    path: "/like",
    name: "AnimalLike",
    component: AnimalLike,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
