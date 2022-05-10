import type { AxiosResponse, AxiosRequestConfig } from 'axios'

export interface HYRequestInterceptors {
  requestIntereptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestIntereptorCatch?: (error: any) => any

  responseIntereptor?: (config: AxiosResponse) => AxiosResponse
  responseIntereptorCatch?: (error: any) => any
}

export interface HYRequestConfig extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors
}
