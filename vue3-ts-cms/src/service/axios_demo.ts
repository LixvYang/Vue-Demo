import axios from 'axios'
// axios实例
axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res.data)
})

axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000
// axios.defaults.headers = {}

// get请求传入参数
// axios
//   .get('/get', {
//     params: {
//       name: 'coderwhy',
//       age: 18
//     },
//     timeout: 5000
//     // headers: {}
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// axios
//   .post('post', {
//     data: {
//       name: 'coderwhy',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// 4. axios 配置选项

// 5. axios.all()
axios
  .all([
    axios.get('/get', { params: { name: 'coderwhy' } }),
    axios.post('/post', { data: { name: 'coderwhy' } })
  ])
  .then((res) => {
    console.log(res[0].data)
    console.log(res[1].data)
  })

// 6. axios拦截器
axios.interceptors.request.use(
  (config) => {
    // 请求成功
    // 拦截操作

    return config
  },
  (err) => {
    console.log(err)
    return err
  }
)
// 请求成功  请求失败
axios.interceptors.response.use(
  (res) => {
    console.log(res)
    return res
  },
  (err) => {
    console.log(err)
    return err
  }
)
