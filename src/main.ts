import { createApp } from 'vue'
import App from './App.vue'
import { appRouter } from './router/router'

createApp(App)
.use(appRouter)
.mount('#app')
