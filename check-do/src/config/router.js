import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import Register from '../components/Register.vue'
import NewTarget from '../components/NewTarget.vue'

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
},
{
    name: 'NewTarget',
    path: '/newtarget',
    component: NewTarget
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router