import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import 'normalize.css'
import '@/assets/base.css'



createApp(App)
.use(router)
.mount('#app')
