import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig, AxiosRequestConfig } from 'axios';
import { ElMessage } from 'element-plus';
import { getMessageInfo } from './status';

interface BaseResponse<T = any> {
    code: number | string;
    message: string;
    data: T;
    status?: number | string;
}

const currentBaseUrl = import.meta.env.VITE_APP_USE_MOCK
    ? import.meta.env.VITE_APP_MOCK_BASEURL
    : import.meta.env.VITE_APP_API_BASEURL;
const service = axios.create({
    baseURL: currentBaseUrl,
    timeout: 1000 * 15
});

// 请求拦截
service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

// 响应拦截
service.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response.status === 200) {
            return response.data;
        }
        ElMessage({
            message: getMessageInfo(response.status),
            type: 'error'
        });
    },
    (error: any) => {
        const { response } = error;
        if (response) {
            ElMessage({
                message: getMessageInfo(response.status),
                type: 'error'
            });
            return Promise.reject(response.data);
        }
        ElMessage({
            message: '网络请求失败，请稍后重试',
            type: 'error'
        });
    }
);

// 此处相当于二次响应拦截
// 为响应数据进行定制化处理
const requestInstance = <T = any>(config: AxiosRequestConfig): Promise<T> => {
    const conf = config;
    return new Promise((resolve, reject) => {
        service.request<any, AxiosResponse<BaseResponse>>(conf).then((res: AxiosResponse<BaseResponse>) => {
            const data = res.data; // 如果data.code为错误代码返回message信息
            if (data.code != 0) {
                ElMessage({
                    message: data.message,
                    type: 'error'
                });
                reject(data.message);
            } else {
                ElMessage({
                    message: data.message,
                    type: 'success'
                }); // 此处返回data信息 也就是 api 中配置好的 Response类型
                resolve(data as T);
            }
        });
    });
};

export function get<T = any, U = any>(config: AxiosRequestConfig, url: string, parms?: U): Promise<T> {
    return requestInstance({ ...config, url, method: 'GET', params: parms });
}
export function post<T = any, U = any>(config: AxiosRequestConfig, url: string, data: U): Promise<T> {
    return requestInstance({ ...config, url, method: 'POST', data: data });
}

export function put<T = any, U = any>(config: AxiosRequestConfig, url: string, parms?: U): Promise<T> {
    return requestInstance({ ...config, url, method: 'PUT', params: parms });
}
export function del<T = any, U = any>(config: AxiosRequestConfig, url: string, data: U): Promise<T> {
    return requestInstance({ ...config, url, method: 'DELETE', data: data });
}
