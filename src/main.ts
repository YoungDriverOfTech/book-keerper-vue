import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
import Liang from './components/Liang.vue'
import Liang2 from './components/Liang2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Liang },
        { path: '/xxx', component: Liang2 },
    ]
})


const app = createApp(App)
app.use(router)
app.mount('#app')