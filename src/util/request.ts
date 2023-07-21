// request.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const API_BASE_URL = '/api';
const TIME_OUT = 20000;
// 自定义请求返回数据的类型
// interface HData<T> {
//     data: T;
//     returnCode: string;
//     success: boolean;
// }

class HRequest {
    config: AxiosRequestConfig;
    instance: AxiosInstance;

    constructor(options: AxiosRequestConfig ) {
        this.config = options;
        this.instance = axios.create(options);
    }

    // 类型参数的作用，T决定AxiosResponse实例中data的类型
    request<T = any>(config: AxiosRequestConfig ): Promise<T> {
        return new Promise((resolve, reject) => {
            this.instance
                .request<any>(config)
                .then((res) => {
                    console.log(res)
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    get<T = any>(config: AxiosRequestConfig ): Promise<T> {
        return this.request({ ...config, method: 'GET' });
    }

    post<T = any>(config: AxiosRequestConfig ): Promise<T> {
        return this.request({ ...config, method: 'POST' });
    }

    delete<T = any>(config: AxiosRequestConfig ): Promise<T> {
        return this.request({ ...config, method: 'DELETE' });
    }

    patch<T = any>(config: AxiosRequestConfig ): Promise<T> {
        return this.request({ ...config, method: 'PATCH' });
    }
}

const request = new HRequest({
    baseURL: API_BASE_URL,
    timeout: TIME_OUT,
    headers : {
        "X-BLOBR-KEY": "iYv4RNF5ZeK0leqsN3RD60xqreaB8F8u"
    },
    interceptorHooks: {
        requestInterceptor: (config) => {
            return config
        },
        requestInterceptorCatch: (err) => {
            return err
        },
        responseInterceptor: (res) => {
            return res.data
        },
        responseInterceptorCatch: (err) => {
            return err
        }
    }
} as AxiosRequestConfig)


export { request }
