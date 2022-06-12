import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { HYRequestInterceptors, HYRequestConfig } from './type'
import { ElLoading } from 'element-plus'

const DEFAULT_LOADING = true

class HYRequest {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors
  showLoading?: boolean
  loading?: any

  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    this.showLoading == config.showLoading ?? DEFAULT_LOADING
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
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在加载...',
            background: 'rgba(0,0,0,0.5)'
          })
        }
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
        // loading移除
        setTimeout(() => {
          this.loading?.close()
        }, 3000)

        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('请求失败，错误信息')
        } else {
          return res.data
        }
      },
      (err) => {
        console.log('所有实例都有的拦截器，响应失败拦截')
        this.loading?.close()
        if (err.response.status === 404) {
          console.log('404的错误')
        }
        return err
      }
    )
  }

  request<T>(config: HYRequestConfig): Promise<T> {
    return new Promise((resolve) => {
      // 1. 单个请求对请求config的处理
      if (config.interceptors?.requestIntereptor) {
        config = config.interceptors.requestIntereptor(config)
      }

      // 2. 单个请求对请求config的处理
      if (config.showLoading == true) {
        this.loading = config.showLoading
      }

      // 2. 当前实例的请求
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseIntereptor) {
            // res = config.interceptors.responseIntereptor(res)
          }
          console.log(res)

          this.showLoading = DEFAULT_LOADING

          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING
          return err
        })
    })
  }

  get<T>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELET' })
  }
  patch<T>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default HYRequest
