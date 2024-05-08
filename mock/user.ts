import { MockMethod } from 'vite-plugin-mock';

export default [
    {
        // 前面的 /mock 为 mock 生效需要配置的根路径 后面会提到
        url: '/mock/api/login',
        method: 'post',
        // 使用 body 可以获取请求体
        response: ({ body }) => {
            // 简单编写一个逻辑
            // 用户名不等于密码就是密码错误
            if (body.username !== body.password) {
                // 返回JSON信息
                return {
                    data: {
                        code: 1,
                        message: '密码错误',
                        username: '',
                        roles: [],
                        accessToken: ''
                    }
                };
            }
            // 其余的则显示登录成功
            if (body.username === 'nuanxin') {
                return {
                    data: {
                        code: 0,
                        message: '登录成功',
                        username: '暖心',
                        roles: ['admin'],
                        accessToken: 'admin'
                    }
                };
            } else {
                return {
                    data: {
                        code: 0,
                        message: '登录成功',
                        username: 'common',
                        roles: ['common'],
                        accessToken: 'common'
                    }
                };
            }
        }
    },
    {
        // 获取用户信息的接口
        url: '/mock/api/getUserInfo',
        method: 'post',
        response: ({ body }) => {
            if (body.accessToken === 'nuanxin') {
                return {
                    data: {
                        code: 0,
                        message: '登录成功',
                        username: '暖心',
                        roles: ['admin'],
                        accessToken: 'nuanxin'
                    }
                };
            } else if (body.accessToken === 'common') {
                return {
                    data: {
                        code: 0,
                        message: '登录成功',
                        username: '普通用户',
                        roles: ['common'],
                        accessToken: 'common'
                    }
                };
            } else {
                return {
                    data: {
                        code: 2,
                        message: 'Token失效',
                        username: '',
                        roles: [],
                        accessToken: ''
                    }
                };
            }
        }
    }
] as MockMethod[];
