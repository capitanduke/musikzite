import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'
import indexRoute from './components/Router'
import * as api from './services/user.service'

const store = createStore({
    state: {
        user: {},
    },
    mutations: {
        login2(state, payload) {
            state.user = payload
        },
    },
    actions: {
        login2(context, payload) {
            console.log('hello action')
            context.commit('login2', payload)
        },
    },
})

const app = createApp(App)
app.provide('api', api)
app.use(indexRoute)
app.use(store)
app.mount('#app')
