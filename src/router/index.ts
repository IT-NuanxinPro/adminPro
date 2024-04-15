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

router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
});

router.afterEach(() => {
    NProgress.done();
});

export default router;
