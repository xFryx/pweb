<template>
    <v-app>
        <v-app-bar
            relative
            
            dark
            shrink-on-scroll
            prominent
            src="https://i.picsum.photos/id/253/2448/3264.jpg?hmac=I8RjDOZ8xvZI18p6_1XtOoAC2dqd0gH1oICvZ0KZtM4"
            fade-img-on-scroll
            scroll-target="#scrolling-techniques-4"
            >
            <template v-slot:img="{ props }">
                <v-img
                v-bind="props"
                gradient="to top right, rgba(0,0,0), rgba(15,206,47,.4)"
                ></v-img>
            </template>
            <v-toolbar-title>La contra</v-toolbar-title>
            <template v-slot:extension>
                <v-tabs align-with-title>
                <v-tab @click="$store.commit('redireccion','/usuario/home')"> Inicio </v-tab>
                <v-tab @click="$store.commit('redireccion', '/especialista/buscar')"> Pedidos </v-tab>
                <v-tab @click="$store.commit('redireccion', '/especialista/buscar')"> Puntos de venta </v-tab>
               
                </v-tabs>
            </template>
            </v-app-bar>
        <v-main>
            <v-sheet color="#F1F1E8" height="700"  >
                <v-container>
                    <v-row>
                        <v-col>
                            <v-row>
                                <v-col cols="3" v-for="( producto,index ) in productos " :key="index">
                                    <CardHome 
                                        :icono="producto.icono" 
                                        :redireccion="producto.redireccion" 
                                        :titulo="producto.titulo"
                                        :url="producto.url" 
                                        :accion=producto.accion
                                        :subtitulo=producto.subtitulo
                                    />
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </v-sheet>
        </v-main>
    </v-app>
</template>
<script>
import CardHome from '../../components/CardHome'
export default {
    components: {
        CardHome,
    },
    data(){
        return {
            productos:  [
                {   
                    accion: 'Pedir',
                    
                    redireccion: 
                    {
                        name: "informacion_producto",
                        params: { 
                            id: 1, 
                            data: {
                                titulo: 'Moringa',
                                subtitulo: 'Precio por unidad 1500$',
                                icono: 'mdi-clover',
                                url: 'https://i.picsum.photos/id/278/5616/3744.jpg?hmac=zawPeNcfplftQYUkYorkAo_ez3gdySyhS6BczFLG2g0'
                            } 
                        }
                    },
                    titulo: ' Moringa ',
                    subtitulo: 'Precio por unidad de 150g 3000$',
                    icono: 'mdi-clover',
                    url: 'https://i.picsum.photos/id/278/5616/3744.jpg?hmac=zawPeNcfplftQYUkYorkAo_ez3gdySyhS6BczFLG2g0'
                },
                {
                    accion: 'Buscar',
                   
                    redireccion: {
                        name: "informacion_producto",
                        params: { 
                            id: 2, 
                            data: {
                                titulo: 'Calendula',
                                subtitulo: 'Precio por unidad 1500$',
                                icono: 'mdi-clover',
                                url: 'https://i.picsum.photos/id/251/5184/3456.jpg?hmac=6vDCffC-BtWehSjjIcBYrfML3N36urwiPQ0MWAYt3YU'
                            } 
                        }
                    },
                    titulo: 'Calendula',
                    subtitulo: 'Precio por unidad de 3500$',
                    icono: 'mdi-store',
                    url: 'https://i.picsum.photos/id/251/5184/3456.jpg?hmac=6vDCffC-BtWehSjjIcBYrfML3N36urwiPQ0MWAYt3YU'
                },
                {
                    accion: 'Buscar',
                   
                    redireccion: {
                        name: "informacion_producto",
                        params: { 
                            id: 3, 
                            data: {
                                titulo: 'Calendula',
                                subtitulo: 'Precio por unidad 1500$',
                                icono: 'mdi-clover',
                                url: 'https://i.picsum.photos/id/251/5184/3456.jpg?hmac=6vDCffC-BtWehSjjIcBYrfML3N36urwiPQ0MWAYt3YU'
                            } 
                        }
                    },
                    titulo: 'Calendula',
                    subtitulo: 'Precio por unidad de 3500$',
                    icono: 'mdi-store',
                    url: 'https://i.picsum.photos/id/251/5184/3456.jpg?hmac=6vDCffC-BtWehSjjIcBYrfML3N36urwiPQ0MWAYt3YU'
                },
                {
                    accion: 'Buscar',
                   
                    redireccion: {
                        name: "informacion_producto",
                        params: { 
                            id: 4, 
                            data: {
                                titulo: 'Calendula',
                                subtitulo: 'Precio por unidad 1500$',
                                icono: 'mdi-clover',
                                url: 'https://i.picsum.photos/id/251/5184/3456.jpg?hmac=6vDCffC-BtWehSjjIcBYrfML3N36urwiPQ0MWAYt3YU'
                            } 
                        }
                    },
                    titulo: 'Calendula',
                    subtitulo: 'Precio por unidad de 3500$',
                    icono: 'mdi-store',
                    url: 'https://i.picsum.photos/id/251/5184/3456.jpg?hmac=6vDCffC-BtWehSjjIcBYrfML3N36urwiPQ0MWAYt3YU'
                },
                {
                    accion: 'Buscar',
                   
                    redireccion: {
                        name: "informacion_producto",
                        params: { 
                            id: 5, 
                            data: {
                                titulo: 'Calendula',
                                subtitulo: 'Precio por unidad 1500$',
                                icono: 'mdi-clover',
                                url: 'https://i.picsum.photos/id/251/5184/3456.jpg?hmac=6vDCffC-BtWehSjjIcBYrfML3N36urwiPQ0MWAYt3YU'
                            } 
                        }
                    },
                    titulo: 'Calendula',
                    subtitulo: 'Precio por unidad de 3500$',
                    icono: 'mdi-store',
                    url: 'https://i.picsum.photos/id/251/5184/3456.jpg?hmac=6vDCffC-BtWehSjjIcBYrfML3N36urwiPQ0MWAYt3YU'
                },
                {
                    accion: 'Comprar',
                   redireccion: {
                        name: "informacion_producto",
                        params: { 
                            id: 6, 
                            data: {
                                titulo: 'Calendula',
                                subtitulo: 'Precio por unidad 1500$',
                                icono: 'mdi-clover',
                                url: 'https://i.picsum.photos/id/251/5184/3456.jpg?hmac=6vDCffC-BtWehSjjIcBYrfML3N36urwiPQ0MWAYt3YU'
                            } 
                        }
                    },
                    titulo: 'Productos',
                    subtitulo: 'Precio por unidad de 3504$',
                    icono: 'mdi-cart-plus',
                    url: 'https://i.picsum.photos/id/253/2448/3264.jpg?hmac=I8RjDOZ8xvZI18p6_1XtOoAC2dqd0gH1oICvZ0KZtM4'
                },
            ]
        
        }
    },
    created(){

    },
    methods: {

    },
}
</script>