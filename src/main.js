
// CORE
import { createApp } from 'vue'

import App from './App.vue'

// STYLE
import './style.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

// MAIN PAGES
import indexPage from './index.vue'
import projectsPage from './projects/projects.page.vue'

// ROUTER
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', component: indexPage },
    { path: '/projects', component: projectsPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app')
