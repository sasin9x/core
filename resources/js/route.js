import VueRouter from 'vue-router';

import Index from './pages/Index'
import Error404 from './pages/errors/Error404'

const routes = [
    {
        path: '/',
        component: Index,
        name: 'index',
    },

    // page not found - error 404
    { 
        path: '*', 
        component: Error404,
    }
];

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

export default router;