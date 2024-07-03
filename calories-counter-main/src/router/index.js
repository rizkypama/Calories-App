import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import SearchView from "../views/SearchView.vue";
import SettingView from "../views/SettingView.vue";
import CommonView from "../views/CommonView.vue";
import BrandedView from "../views/BrandedView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: AboutView,
        },
        {
            path: "/search",
            name: "search",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: SearchView,
        },
        {
            path: "/setting",
            name: "setting",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: SettingView,
        },
        {
            path: "/common/:id",
            name: "common food",
            component: CommonView,
        },
        {
            path: "/branded/:id",
            name: "branded food",
            component: BrandedView,
        },
    ],
});

export default router;
