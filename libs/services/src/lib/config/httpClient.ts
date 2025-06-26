import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { axiosPrototype } from './axiosInit'

class HttpClient {
  axiosInstance: AxiosInstance

  constructor(component = '') {
    this.axiosInstance = axiosPrototype(component)

  }

  async get(url: string, configParams?: AxiosRequestConfig | undefined){
    return this.axiosInstance.get(url, configParams)
  }
  
  async post(
    url: string, 
    reqObject?: any, 
    configParams?: AxiosRequestConfig | undefined) {

      return await this.axiosInstance.post(url, reqObject, configParams)
  
  }
  
  async put(url:string, reqObject: any) { 
      return await this.axiosInstance.put(url, reqObject)
  
  }
  
  async delete(url:string, params: AxiosRequestConfig | undefined) {
   
      return await this.axiosInstance.delete(url, params)
   
  }
  
  async patch(url:string, params: any) {
      return await this.axiosInstance.patch(url, params)
   
  }
}
  
export default HttpClient