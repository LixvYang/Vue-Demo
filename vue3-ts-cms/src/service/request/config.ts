/**
 * 1. 手动修改
 */
// const BASE_URL = 'http://coderwhy.org/dev'
// const BASE_NAME = 'coderwhy'

// const BASE_URL = 'http://coderwhy.org/prod'
// const BASE_NAME = 'kobe'

// const BASE_URL = 'http://coderwhy.org/test'
// const BASE_NAME = 'james'

/**
 * 2. 根据provess.env.NODE_ENV
 */
// let BASE_URL = ''
// let BASE_NAME = ''

// if (process.env.NODE_ENV === 'development') {
//   BASE_URL = 'http://coderwhy.org/dev'
//   BASE_NAME = 'coderwhy'
// } else if (process.env.NODE_ENV === 'production') {
//   BASE_URL = 'http://coderwhy.org/prod'
//   BASE_NAME = 'kobe'
// } else {
//   BASE_URL = 'http://coderwhy.org/test'
//   BASE_NAME = 'james'
// }

// export { BASE_URL, BASE_NAME }

let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://123.207.32.32:8000'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://coderwhy.org/prod'
} else {
  BASE_URL = 'http://coderwhy.org/test'
}

export { BASE_URL, TIME_OUT }
