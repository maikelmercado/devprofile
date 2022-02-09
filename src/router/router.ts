import { createRouter, RouteRecordRaw , createWebHistory} from "vue-router";
import MainPage from '../pages/main/MainPage.vue';
import ContactPage from '../pages/contact/ContactPage.vue';

const routes:RouteRecordRaw[] = [
    {
        path:'/contact',
        component: ContactPage
    },
    {
        path:'/',
        component: MainPage
    }
];


export const appRouter = createRouter({
    history: createWebHistory(),
    routes:routes
});








