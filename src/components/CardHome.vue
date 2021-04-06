<template>
 <v-hover class="ma-3" v-slot="{ hover }">
    <v-card max-width="400" rounded="xl" elevation="5" >
        <v-card-text>
            <v-img
                    alt="user"
                    :src="url"
                    class="mx-auto"
                    :aspect-ratio="16/9"
                >
                <v-expand-transition>
                        <div
                            v-if="hover"
                            class="d-flex transition-fast-in-fast-out indigo darken-2 v-card--reveal display-3 white--text"
                            style="height: 100%;"
                        >
                            <v-btn @click="$store.commit('redireccion', redireccion)" dark> {{accion}} <v-icon> {{icono}} </v-icon></v-btn>
                        </div>
                </v-expand-transition>
            </v-img>
            <v-card-title>
                {{titulo}}
            </v-card-title>

            <v-card-subtitle>
                {{subtitulo}}
            </v-card-subtitle>
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
            <v-btn
                color="blue lighten-2"
                text
                block
            >
                Explorar
            </v-btn>
        </v-card-actions>
       
    </v-card>
  </v-hover>  
</template>
<script>
export default {
    props: {
        url: {
            type: String,
            required: true,
        },
        redireccion: {
            type: Object,
            required: true,
        },
        titulo: {
            type: String,
            required: true,
        },
        subtitulo: {
            type: String,
            //required: true,
            default: 'Mas de 250 tipos de plantas para su bienestar'
        },
        accion: {
            type: String,
            //required: true,
            default: 'Explorar'
        },
        icono: {
            type: String,
            required: true,
            default: 'mdi-store'
        },

    },
    data(){
        return{
            show: false
        }
    },
    methods: {

    },
    beforeCreate(){

    },
    created(){

    },
    mounted(){

    },
    beforeDestroy(){

    },
    destroyed(){

    },

}
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .8;
  position: absolute;
  width: 100%;
}
</style>