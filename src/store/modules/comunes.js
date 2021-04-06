export default {
    state: {

    },
    actions: {
        crearToken({rootState},len) {
                console.log(rootState.identificacion)
                let text = ""
                let chars = "abcdefghijklmnopqrstuvwxyz123456789"
            
                for( let i=0; i < len; i++ ) {
                    text += chars.charAt(Math.floor(Math.random() * chars.length))
                }
            
            return rootState.identificacion+'_'+text
        },
    },
    mutations: {

    },
}