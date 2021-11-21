import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contactus from "../views/Contactus.vue"
import About from "../views/About.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contactus",
    name: "Contactus",
    component: Contactus,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
