import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/fi/views/HomeView";
import AboutView from "@/fi/views/AboutView";
import News from "@/fi/views/NewsView";
import PricingInfo from "@/fi/views/PricingInfoView";
import Gallery from "@/fi/views/GalleryView";

import AdminPanel from "@/adminPanel/AdminPanel";
import LoginPage from "@/adminPanel/LoginPage";

import EnHomeView from "@/en/views/HomeView";
import EnNews from "@/en/views/NewsView";
import EnPricingInfo from "@/en/views/PricingInfoView";
import EnAboutView from "@/en/views/AboutView";
import EnGallery from "@/en/views/GalleryView";

const routes = [
  //English
  {
    path: "/home",
    name: "enHome",
    component: EnHomeView,
  },
  {
    path: "/en/about",
    name: "enAbout",
    component: EnAboutView,
  },
  {
    path: "/en/news",
    name: "enNews",
    component: EnNews,
  },
  {
    path: "/en/pricing",
    name: "enPricing",
    component: EnPricingInfo,
  },
  {
    path: "/en/gallery",
    name: "enGallery",
    component: EnGallery,
  },

  //ADMIN PAGES
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/admin",
    name: "AdminPanel",
    component: AdminPanel,
  },

  //Finnish
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/news",
    name: "news",
    component: News,
  },
  {
    path: "/pricing",
    name: "pricing",
    component: PricingInfo,
  },
  {
    path: "/gallery",
    name: "gallery",
    component: Gallery,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
