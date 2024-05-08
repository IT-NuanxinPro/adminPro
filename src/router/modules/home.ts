export default {
    path: '/',
    name: 'Layout',
    meta: {},
    component: () => import('@/layout/index.vue'),
    children: [
        {
            path: '/',
            name: 'homePage',
            component: () => import('@/views/home/index.vue'),
            meta: {}
        }
    ]
};
