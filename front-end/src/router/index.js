import { createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import LogInView from "@/views/LogInView.vue";

const routes = [
    {
        path: '/'
        , component: HomeView
    }
    , {
        path: '/about'
        , component: AboutView
    }
    , {
        path: '/login'
        , component: LogInView
    }
];

const router = createRouter({
   history: createWebHistory('/'),
   routes: routes
});

export default router;