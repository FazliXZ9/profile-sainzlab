import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App)

// Pasang plugin Motion sebelum di-mount
app.use(MotionPlugin)

app.mount('#app')