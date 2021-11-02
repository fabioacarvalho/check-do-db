import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import Register from '../components/Register.vue'

Vue.use(VueRouter)

const routes = [{
    name: 'Home',
    path: '/',
    component: Home
},
{
    name: 'Register',
    path: '/register',
    component: Register
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router