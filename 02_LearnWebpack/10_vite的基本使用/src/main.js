import _ from 'lodash-es'
import { createApp } from 'vue'
import { sum } from './js/math'
import mul from './ts/mul'
import App from './vue/App.vue'

import './css/style.css'
import './css/title.less'

console.log('Hello world')
console.log(sum(10, 20))
console.log(mul(20, 30))

console.log(_.join(['abc', 'cba'], '-'))

const titleE1 = document.createElement('div')
titleE1.className = 'title'
titleE1.innerHTML = 'Hello vite'
document.body.appendChild(titleE1)

// vue
createApp(App).mount("#app")