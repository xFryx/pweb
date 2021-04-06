<template>
    <v-app>
        <v-main>
            <Cruds :items=areas :titulo="'Locales'" />
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
                    imagen: require('../../assets/locales.png'),
                    nombre: 'Local',
                   
                },
                {
                    imagen: require('../../assets/locales.png'),
                    nombre: 'Local',
                    
                    
                },
                {
                    imagen: require('../../assets/locales.png'),
                    nombre: 'locales',
                },
                {
                    imagen: require('../../assets/locales.png'),
                    nombre: 'locales',
                    
                }
            ]
        }
    },
    created(){

    }
}
</script>