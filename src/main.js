import '@/styles/common.css'
import '@/styles/color.css'
import '@/styles/media.css'
import '@/assets/fonts/iconfont.css'

import '@/js/flexible'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
