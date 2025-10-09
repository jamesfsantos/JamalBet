import { createWebHistory, createRouter } from "vue-router";
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import FaleConosco from "@/views/FaleConosco.vue";


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
    path: "/fale-conosco",
    name: "FaleConosco",
    component: FaleConosco,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;