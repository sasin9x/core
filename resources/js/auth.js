import bearer from '@websanova/vue-auth/drivers/auth/bearer'
import axios from '@websanova/vue-auth/drivers/http/axios.1.x'
import router from '@websanova/vue-auth/drivers/router/vue-router.2.x'

const config = {
    auth: bearer,
    http: axios,
    router: router,
    authRedirect: '/',
    tokenDefaultName: 'auth-token',
    tokenStore: ['cookie'],
    headerTokenReplace: '{auth_token}',
    rolesVar: 'role_id',

    notFoundRedirect: {
        path: '/'
    },
    registerData: {
        url: '/api/register',
        method: 'POST',
        redirect: null,
    },
    loginData: {
        url: '/api/login',
        method: 'POST',
        redirect: null,
        fetchUser: true,
    },
    logoutData: {
        url: '/api/logout',
        method: 'POST',
        redirect: null,
        makeRequest: true
    },
    fetchData: {
        url: '/api/user',  
        method: 'GET',
        enabled: false,
    },
    parseUserData (data) {
        return data || {}
    },
};

export default config;