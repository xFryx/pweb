<template>
    <v-app class="primary">
        <v-app-bar color="rgb(0,0,0,0.4)" app>
            <v-avatar>
                <img
                    :src="require('../assets/contra.jpg')"
                    alt="John"
                >
                </v-avatar>
                <v-toolbar-title class="ml-10">Medicina natural tradicional</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-col cols="2">
                <v-select dark class="mt-8" filled dense rounded label="Opciones"></v-select>
            </v-col>
            <v-btn large dark rounded color="#64DD17" > Productos </v-btn>
        </v-app-bar>
        <v-main class="mt-n15">
            
                <v-parallax :src="fondo">
                    <v-container class="fill-height" fluid>
                        <v-row align="center"  justify="center">
                            <v-col cols="12" sm="8"  md="4" >
                                <v-row v-for="(info,index) in informacion" :key="index">
                                    <v-col v-if="info.icon!=''" cols="1">
                                        <v-icon> {{info.icon}} </v-icon>
                                    </v-col>
                                    <v-col>
                                        <TextoDiv :clase=info.class :texto=info.text />
                                    </v-col>
                                </v-row>
                                <!--    
                                <h2 style="font-family: 'Courier New', Courier, monospace;margin-top:15px">Medicina natural tradicional</h2>  
                                -->
                            </v-col>
                            <v-col cols="12" sm="8" md="4">
                            </v-col>
                        </v-row>
                    </v-container>
                </v-parallax> 
            <h1 style="font-family: Georgia, Serif;margin-top:64px;text-align:center">Medicina natural tradicional</h1>    
                <v-container  class="my-15" fluid >  
                        <v-row
                            align="center"
                            justify="center"
                            v-for="(card,index) in cards" :key="index"
                        >
                          <template v-if="index%2==0">
                              <v-col cols="12" md="4" sm="8"  >
                                    <CardHome 
                                        :icono="card.icono" 
                                        :redireccion="card.redireccion" 
                                        :titulo="card.titulo"
                                        :url="card.url" 
                                        :accion=card.accion
                                    />
                                </v-col>
                                <v-col class="hide onli-small" cols="4">
                                    <TextoDiv :clase="[`text-h4 mb-${-1}`]" :texto=card.titulo />
                                    <TextoDiv :clase="[`text-h5 mb-${-1}`]" :texto="`
                                            Una descripcion algo larga
                                            Una descripcion algo larga
                                            Una descripcion algo larga
                                            Una descripcion algo larga
                                            Una descripcion algo larga
                                                Una descripcion algo larga
                                            `" />
                                    
                                       
                                </v-col>
                          </template>
                          <template v-else>
                              <v-col cols="4">
                                    <TextoDiv :clase="[`text-h4 mb-${-1}`]" :texto=card.titulo />
                                    <TextoDiv :clase="[`text-h5 mb-${-1}`]" :texto="`
                                            Una descripcion algo larga
                                            Una descripcion algo larga
                                            Una descripcion algo larga
                                            Una descripcion algo larga
                                            Una descripcion algo larga
                                                Una descripcion algo larga
                                            `" />
                                </v-col>
                              <v-col cols="12" md="4" sm="8"  >
                                    <CardHome 
                                        :icono="card.icono" 
                                        :redireccion="card.redireccion" 
                                        :titulo="card.titulo"
                                        :url="card.url" 
                                        :accion=card.accion
                                    />
                                </v-col>
                                
                          </template>
                            
                            
                        </v-row>
                            
                </v-container>
        </v-main>
        <Footer/>
        
    </v-app>
</template>
<script>
import CardHome from '../components/CardHome'
import Footer from '../components/Footer'
import TextoDiv from '../components/textos/TextoDiv'
export default {
    components: {
        CardHome,
        Footer,
        TextoDiv,
    },
    name: 'Home',
    data(){
        return{
            fondo: require('../assets/contra.jpeg'),
            icono: require('../assets/contra.jpg'),
            show: null,
            informacion: [
                {
                    class: [`text-h1 mb-${-1}`],
                    icon: '',
                            
                    text: "La contra"
                },
                {
                    class: [`text-h6 mb-${-1}`],
                    icon: 'mdi-phone',
                            
                    text: "Telefono +57 32131212"
                },
                {
                    class: [`text-h6 mb-${-1}`],
                    icon: 'mdi-email',
                            
                    text: "Email: lacontra@gmail.com"
                },
                {
                    class: [`text-h6 mb-${-1}`],
                    icon: 'mdi-store',
                            
                    text: "Sede principal Av Ferrocarril "
                },
                
            ],
            cards: [
                {   
                    accion: 'Pedir',
                    subtitulo: '',
                    redireccion: {name: 'home'},
                    titulo: 'Ventas o pedidos',
                    icono: 'mdi-clover',
                    url: 'https://i.picsum.photos/id/127/4032/2272.jpg?hmac=QFoFT2_eb_DCqjdlj09UFgUHwI_zefDTBdECRz9lO5Q'
                },
                {
                    accion: 'Buscar',
                    subtitulo: '',
                    redireccion: {name: 'home'},
                    titulo: 'Puntos de venta',
                    icono: 'mdi-store',
                    url: 'https://i.picsum.photos/id/159/5184/2551.jpg?hmac=O4EEAOZUF3vsAFX6mBu7Xnb63J0ZeABS0KwBrjZaDN0'
                },
                {
                    accion: 'Comprar',
                    subtitulo: '',
                    redireccion: {name: 'productos'},
                    titulo: 'Productos',
                    icono: 'mdi-cart-plus',
                    url: 'https://i.picsum.photos/id/253/2448/3264.jpg?hmac=I8RjDOZ8xvZI18p6_1XtOoAC2dqd0gH1oICvZ0KZtM4'
                }
            ]
        }
    },
    created(){
        this.$vuetify.theme.themes.light.primary = '#f1f1e8'
        console.log('Hola')
    }
}
</script>