
import { createWebHistory, createRouter } from "vue-router";
import ProfilePage from "../pages/ProfilePage";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";

import LoginPage from "../pages/LoginPage";
import AdminPage from "../pages/AdminPage.vue"

import ServicePage from "../pages/ServicePage.vue"
import ArticlePage from "../pages/ArticlePage.vue"
import { getAuth } from "firebase/auth";
import HelpPage from "../pages/HelpPage.vue"


const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage
    },
    {
        path: "/service",
        name: "Service",
        component: ServicePage
    },


    {
        path: "/help",
        name: "HelpPage",
        component: HelpPage
    },
    {
        path: "/article",
        name: "ArticlePage",
        component: ArticlePage
    },
    {
        path: "/about",
        name: "About",
        component: AboutPage
    },

    {
        path: "/admin",
        name: "AdminPage",
        component: AdminPage,
        meta: { onlyAuthUser: true }
    },
    {
        path: "/profile",
        name: "Profile",
        component: ProfilePage,
        meta: { onlyAuthUser: true }
    },
    {
        path: "/login",
        name: "Login",
        component: LoginPage,
        meta: { onlyGuestUser: true }
    }



]

const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, _, next) => {
    const isAuth = !!getAuth().currentUser;


    if (to.meta.onlyAuthUser) {
        if (isAuth) {
            next();
        } else {
            next({ name: "Login" });
        }
    } else if (to.meta.onlyGuestUser) {
        if (isAuth) {
            next({ name: "Home" });
        } else {
            next();
        }
    } else {
        next();
    }
})

export default router;