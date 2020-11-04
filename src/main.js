import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {Button, Field, Form,Image as VanImage } from 'vant';
import 'vant/lib/index.css';
const app = createApp(App)

app.use(router)
app.use(Button)
app.use(Form)
app.use(Field)
app.use(VanImage)
app.mount('#app')
