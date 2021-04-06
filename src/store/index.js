import Vue from 'vue'
import Vuex from 'vuex'
import comunes from './modules/comunes'
import router from '../router'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        comunes,
    },
    state: {
        
    },
    mutations: {
        redireccion(state,ruta){
            console.log(state)
            console.log(ruta)
            router.push(ruta)
        },
    },
    actions: {

    }
})