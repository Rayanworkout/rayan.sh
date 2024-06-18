
// CORE
import { createApp } from 'vue'

// Router
import { createWebHistory, createRouter } from 'vue-router'

// COMPONENTS
import App from './App.vue'
import About from './components/about.component.vue'


// STYLE
import './style.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: App },
        { path: '/about', component: About },
    ],
})


createApp(App)
    .use(router)
    .mount('#app')
