import { post } from '@/http/request';

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

export const userLogin = (data?: LoginParams) => {
    return post<LoginResponse>({}, '/login', data);
};

export const refreshUserInfo = (data?: reLoginParams) => {
    return post<LoginResponse>({}, '/reLogin', data);
};
