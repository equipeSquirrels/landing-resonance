import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        name: 'Home',
        // component: Home
        components: {
            default: () => import(/* webpackChunkName: "home" */ '@/Home.vue'),
        },
    },
    {
        path: '/Newsletter',
        name: 'Newsletter',
        components: {
            default:()=> import('@/view/Newsletter'),
        },
    },




    {
        path:'/legale',
        name: 'Mentionslegales',
        components: {
            default: () => import(/* webpackChunkName: "Mentionslegales" */ '@/view/Legale.vue'),
        },
    },

    {
        path:'/Testeurs',
        name: 'Testeurs',
        components: {
            default: () => import(/* webpackChunkName: "Testeurs" */ '@/Testeurs.vue'),
        },
    },
    {
        path:'/Product',
        name: 'Product',
        components: {
            default: () => import(/* webpackChunkName: "Produit" */ '@/Product.vue'),
        },
    },
    {
        path:'/Panel',
        name: 'Panel',
        components: {
            default: () => import(/* webpackChunkName: "Panel" */ '@/Panel.vue'),
        },
    },
    {
        path:'/methodologie',
        name: 'Methodologie',
        components: {
            default: () => import(/* webpackChunkName: "Panel" */ '@/Methodologie.vue'),
        },
    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router