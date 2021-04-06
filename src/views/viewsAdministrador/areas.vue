<template>
    <v-app>
        <v-main>
            <Cruds :items=areas :titulo="'Area'" />
        </v-main>
    </v-app>
</template>
<script>
import Cruds from '../../components/Cruds'

export default {
    components: {
        Cruds
    },
    data(){
        return{
             areas: [
                {
                    imagen: require('../../assets/productos.png'),
                    nombre: 'Nombre',
                },
                {
                    imagen: require('../../assets/productos.png'),
                    nombre: 'Nombre',
                },
                {
                    imagen: require('../../assets/productos.png'),
                    nombre: 'Nombre',
                },
                {
                    imagen: require('../../assets/productos.png'),
                    nombre: 'Nombre',
                }
            ]
        }
    },
    created(){

    }
}
</script>