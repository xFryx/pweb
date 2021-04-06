<template>
    <v-app>
        <v-main>
            <Cruds :items=areas :titulo="'Productos'" />
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
                    nombre: 'productos',
                    redireccion: 'crud'
                   
                },
                {
                    imagen: require('../../assets/productos.png'),
                    nombre: 'productos',
                    redireccion: 'empleados'
                    
                    
                },
                {
                    imagen: require('../../assets/productos.png'),
                    nombre: 'productos',
                    redireccion: 'empleados'
                },
                {
                    imagen: require('../../assets/productos.png'),
                    nombre: 'productos',
                    redireccion: 'empleados'
                    
                }
            ]
        }
    },
    created(){

    }
}
</script>