export type LoginParams = {
    username: string;
    password: string;
};

export type reLoginParams = {
    accessToken: string;
};

export type LoginResponse = {
    username: string;
    roles: string[];
    accessToken: string;
    avatar: string;
};

import service from '@/http/request';

export function userLogin(data: LoginParams) {
    return service({
        url: '/login',
        method: 'POST',
        data
    });
}

//  获取所有的用户
export function getUserList() {
    return service({
        url: '/getUserList',
        method: 'get'
    });
}

// export const userLogin = (data?: LoginParams) => {
//     return post<LoginResponse>({}, '/login', data);
// };

// export const refreshUserInfo = (data?: reLoginParams) => {
//     return post<LoginResponse>({}, '/reLogin', data);
// };

// export const getUserList = async (data?: any) => {
//     return get({}, '/getUserList', data);
// };
