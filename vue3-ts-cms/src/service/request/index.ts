import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { HYRequestInterceptors, HYRequestConfig } from './type'

class HYRequest {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors

  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestIntereptor,
      this.interceptors?.requestIntereptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseIntereptor,
      this.interceptors?.responseIntereptorCatch
    )

    // 添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有实例都有的拦截器，请求成功拦截')
        return config
      },
      (err) => {
        console.log('所有实例都有的拦截器，请求失败拦截')
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有实例都有的拦截器，响应成功拦截')
        return res.data
      },
      (err) => {
        console.log('所有实例都有的拦截器，响应失败拦截')
        return err
      }
    )
  }

  request(config: HYRequestConfig): void {
    if (config.interceptors?.requestIntereptor) {
      config = config.interceptors.requestIntereptor(config)
    }

    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseIntereptor) {
        res = config.interceptors.responseIntereptor(res)
      }
      console.log(res)
    })
  }
}

export default HYRequest
