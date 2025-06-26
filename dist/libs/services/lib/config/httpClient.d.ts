import { AxiosInstance, AxiosRequestConfig } from 'axios';

declare class HttpClient {
    axiosInstance: AxiosInstance;
    constructor(component?: string);
    get(url: string, configParams?: AxiosRequestConfig | undefined): Promise<import('axios').AxiosResponse<any, any>>;
    post(url: string, reqObject?: any, configParams?: AxiosRequestConfig | undefined): Promise<import('axios').AxiosResponse<any, any>>;
    put(url: string, reqObject: any): Promise<import('axios').AxiosResponse<any, any>>;
    delete(url: string, params: AxiosRequestConfig | undefined): Promise<import('axios').AxiosResponse<any, any>>;
    patch(url: string, params: any): Promise<import('axios').AxiosResponse<any, any>>;
}
export default HttpClient;
