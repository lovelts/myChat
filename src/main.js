import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {
    Button,
    Field,
    Form, Image as VanImage,
    Tabbar,
    TabbarItem,
    NavBar,
    Search,
    Cell,
    Tabs,
    Tab,
    Sticky,
    SwipeCell,
    Card,
    Dialog
} from 'vant';
import 'vant/lib/index.css';
import 'normalize.css'
const app = createApp(App)

app.use(router)
app.use(Button)
app.use(Form)
app.use(Field)
app.use(VanImage)
app.use(Search)
app.use(Tab)
app.use(Tabs)
app.use(Cell)
app.use(Tabbar);
app.use(TabbarItem);
app.use(NavBar);
app.use(Sticky);
app.use(SwipeCell);
app.use(Card);
app.use(Dialog)

app.mount('#app')
