import './main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueLazyLoad from 'vue3-lazyload'
// import { VueFilePondComponent } from 'vue-filepond';

const app = createApp(App)
app.use(VueLazyLoad)
app.use(createPinia())
app.use(router)
// app.component('FilePond',VueFilePondComponent)
app.mount('#app')
