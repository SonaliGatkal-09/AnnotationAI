import axios, { AxiosInstance } from 'axios'
import axiosRetry from 'axios-retry'
import { baseApiUrl } from '../constants'


export const axiosPrototype = (componentName = ''): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseApiUrl,
    headers: { 'Content-Type': 'application/json' },
  })
  const requestTimeout = null

  const getLoggedInUserToken = () => {
    // token
  }

  instance.interceptors.request.use(
    (request) => {
      request.headers.Authorization = `Bearer ${getLoggedInUserToken()}`
      request.headers['X-component'] = componentName

      if (requestTimeout !== null) {
        request.timeout = requestTimeout
      }

      if (
        request.method === 'post' ||
        request.method === 'put' ||
        request.method === 'patch'
      ) {
        //logger.debug(request.data, request.url, 'Request Payload')
        console.log(request.data, request.url)
      }

      return request
    },
    (error) => Promise.reject(new Error(error)),
  )
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      return Promise.reject(error)
    },
  )
  // registering the custom error handler to the axios instance
  instance.interceptors.response.use(undefined, (error) => {
    console.log(error, componentName)
    return Promise.reject(error)
    //return errorHandler(error, componentName, openModal)
  })

  // axiosRetry(instance, {
  //   retries: 2,
  //   retryCondition: (error) => {
  //     return (
  //       error.response &&
  //       error.response.status >= 500 &&
  //       error.response.status <= 599
  //     )
  //   },
  //   retryDelay: (retryCount) => {
  //     return Math.min(retryCount * 1000, 1000)
  //   },
  // })

  return instance
}
