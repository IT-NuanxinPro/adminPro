import { RouteRecordRaw,createRouter,createWebHashHistory } from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const routes:Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    meta:{},
    component: () => import('@/views/home/index.vue'),
    children: []
  }
];

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

