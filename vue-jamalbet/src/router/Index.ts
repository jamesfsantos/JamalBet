import { createWebHistory, createRouter } from "vue-router";
import FaleConosco from "@/views/FaleConosco.vue";
import RedesSociais from "@/views/RedesSociais.vue";
import Times from "@/views/Times.vue";
import Home from "@/views/Home.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/redes-sociais",
    name: "RedesSociais",
    component: RedesSociais,
  },
  {
    path: "/fale-conosco",
    name: "FaleConosco",
    component: FaleConosco,
  },
  {
    path: "/times",
    name: "Times",
    component: Times,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;