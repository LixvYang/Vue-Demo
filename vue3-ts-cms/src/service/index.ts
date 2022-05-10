// service 统一出口
import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestIntereptor: (config) => {
      // 携带token的拦截
      const token = '123456'
      if (token) {
        config?.headers?.Authorization == `Bearer ${token}`
      }

      console.log('请求成功的拦截')
      return config
    },
    requestIntereptorCatch: (err) => {
      console.log('请求失败的拦截')
      return err
    },
    responseIntereptor: (res) => {
      console.log('响应成功的拦截')
      return res
    },
    responseIntereptorCatch: (err) => {
      console.log('响应失败的拦截')
      return err
    }
  }
})

export default hyRequest
