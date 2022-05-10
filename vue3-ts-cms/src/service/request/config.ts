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
let BASE_URL: String = ''
let BASE_NAME: String = ''

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://coderwhy.org/dev'
  BASE_NAME = 'coderwhy'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://coderwhy.org/prod'
  BASE_NAME = 'kobe'
} else {
  BASE_URL = 'http://coderwhy.org/test'
  BASE_NAME = 'james'
}

export { BASE_URL, BASE_NAME }
