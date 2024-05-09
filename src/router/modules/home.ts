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
            meta: {
                title: '项目介绍',
                isShow: true
            },
            children: []
        },
        {
            path: '/user',
            name: 'userPage',
            component: () => import('@/views/user/index.vue'),
            meta: {
                title: '用户管理',
                isShow: true
            },
            children: []
        },
        {
            path: '/role',
            name: 'rolePage',
            component: () => import('@/views/role/index.vue'),
            meta: {
                title: '角色管理',
                isShow: true
            },
            children: []
        },
        {
            path: '/auth',
            name: 'authPage',
            component: () => import('@/views/auth/index.vue'),
            meta: {
                title: '权限管理',
                isShow: true
            },
            children: []
        }
    ]
};
