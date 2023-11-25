import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EverythingView from "../views/EverythingView.vue";
import WomenView from "../views/WomenView.vue";
import MenView from "../views/MenView.vue";
import AccessoriesView from "../views/AccessoriesView.vue";
import LoginView from "../views/LoginView.vue";
import ShoppingCartView from "../views/ShoppingCartView.vue";
import CartitemView from "../views/CartitemView.vue";
import ContactView from "../views/ContactView.vue";


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/everything",
    name: "everything",
    component: EverythingView,
  },
  {
    path: "/Women",
    name: "Women",
    component: WomenView,
  },
  {
    path: "/Men",
    name: "Men",
    component: MenView,
  },
  {
    path: "/Accessories",
    name: "Accessories",
    component: AccessoriesView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/cart",
    name: "cart",
    component: ShoppingCartView,
  },
  {
    path: '/cart-item/:productId',
    name: 'CartitemView',
    component: CartitemView,
    props: true, 
  },
  {
    path: '/contact',
    name: 'ContactView',
    component: ContactView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
