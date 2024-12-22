import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/views/MainView.vue";
import HistoryView from "@/views/HistoryView.vue";
import store from "@/store";
import AboutView from "@/views/AboutView.vue";
import UniversityView from "@/views/UniversityView.vue";
import HobbyView from "@/views/HobbyView.vue";
import GalleryView from "@/views/GalleryView.vue";
import TestView from "@/views/TestView.vue";
import ContactView from "@/views/ContactView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainView,
  },
  {
    path: "/history",
    name: "history",
    component: HistoryView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/university",
    name: "university",
    component: UniversityView,
  },
  {
    path: "/hobby",
    name: "hobby",
    component: HobbyView,
  },
  {
    path: "/gallery",
    name: "gallery",
    component: GalleryView,
  },
  {
    path: "/test",
    name: "test",
    component: TestView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  store.dispatch("updateViewingHistory");
  next();
});

export default router;
