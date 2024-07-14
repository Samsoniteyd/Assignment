

import { createRouter, createWebHistory } from 'vue-router'

import { createApp } from 'vue'
import App from './App.vue'

import CartPage from './views/CartPage.vue';
import ProductDetailPage from './views/ProductDetailPage.vue';
import ProductsPage from './views/ProductsPage.vue';
import Login from './views/Login.vue';
// import NotFoundPage from './views/NotFoundPage.vue'



const routes = [
    { 
        path:'/cart', 
    component: CartPage, 
    name: 'cart'
    },
    {
     path:'/products/:id', 
     component: ProductDetailPage, 
      name: 'ProductDetailPage'
    },
    {
         path:'/Products', 
        component: ProductsPage, 
        name: 'Products'
    },
    {
         path:'/Login', 
        component: Login, 
        name: 'Login'
    },
    {
         path:'/',  
        redirect: '/Products'
    },
    // {
    //      path:'*', 
    //      component: NotFoundPage,  
        
    // }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
createApp(App).use(router).mount('#app');


