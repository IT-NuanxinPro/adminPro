import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export const aboutRouter = {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about/index.vue'),
    meta: {},
    children: []
} as RouteRecordRaw;

const modulesFiles: Record<string, any> = import.meta.glob(['./modules/*.ts'], { eager: true });

const routes: Array<RouteRecordRaw> = Object.keys(modulesFiles).map((modulePath: string) => {
    const value = modulesFiles[modulePath];
    return value.default;
});

routes.push(aboutRouter);

const router = createRouter({
    history: createWebHashHistory(),
    routes
});
const noLoginRouter = ['/login', '/about'];

router.beforeEach((to, from, next) => {
    NProgress.start();
    const token = sessionStorage.getItem('userInfo');
    if (token || noLoginRouter.includes(to.path)) {
        next();
    } else if (window.location.hostname.includes('nuanxinpro')) {
        next();
    } else {
        next('/login');
    }
});

router.afterEach(() => {
    NProgress.done();
});

export default router;
