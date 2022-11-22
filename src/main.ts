import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import '@/styles/index.less'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import './icons'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
