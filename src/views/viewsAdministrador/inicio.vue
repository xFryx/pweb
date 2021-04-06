<template>
    <v-app>
        <v-row class="ma-5">
            <v-col cols="7">
                <v-row>
                    <v-col sm=12 xs=12 md="6"  v-for="(card,index) in  cards" :key="index">
                         <CardHome 
                            :icono="card.icono" 
                            :redireccion="card.redireccion" 
                            :titulo="card.titulo"
                            :url="card.url" 
                            :accion=card.accion
                        />
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="5">
                <CardGraficas :title="'Reportes'" :color="'blue'" :redireccion="'/'"  >
                    <template slot="header">
                        <v-sparkline
                            :labels="labels"
                            :value="value"
                            color="white"
                            line-width="2"
                            padding="16"
                        ></v-sparkline>
                    </template>
                    <template slot="body">
                        <v-card-text class="pt-0">
                        <div class="title font-weight-light mb-2">
                            Revisa los reportes y graficas
                        </div>
                        <div class="subheading font-weight-light grey--text">
                            Last Campaign Performance
                        </div>
                        <v-divider class="my-2"></v-divider>
                        <v-icon
                            class="mr-2"
                            small
                        >
                            mdi-clock
                        </v-icon>
                        <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
                      </v-card-text>
                    </template>
                </CardGraficas>
                <CardGraficas :title="'Reportes'" :color="'indigo darken-4'" :redireccion="'/'"  >
                    <template slot="header">
                        <v-sparkline
                            :labels="labels"
                            :value="value"
                            color="white"
                            line-width="2"
                            padding="16"
                        ></v-sparkline>
                    </template>
                    <template slot="body">
                        <v-card-text class="pt-0">
                        <div class="title font-weight-light mb-2">
                            Uso de la plataforma
                        </div>
                        <div class="subheading font-weight-light grey--text">
                            Last Campaign Performance
                        </div>
                        <v-divider class="my-2"></v-divider>
                        <v-icon
                            class="mr-2"
                            small
                        >
                            mdi-clock
                        </v-icon>
                        <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
                      </v-card-text>
                    </template>
                </CardGraficas>
            </v-col>
        </v-row>
    </v-app>
</template>
<script>
import CardGraficas from '../../components/CardGraficas.vue'
import CardHome from '../../components/CardHome.vue'
export default {
    components: {
        CardGraficas,
        CardHome,
    },
    data(){
        return {
            labels: [
                '12am',
                '3am',
                '6am',
                '9am',
                '12pm',
                '3pm',
                '6pm',
                '9pm',
            ],
            value: [
                200,
                675,
                410,
                390,
                310,
                460,
                250,
                240,
            ],
            cards: [
                {   
                    accion: 'Pedir',
                    subtitulo: '',
                    redireccion: {name: 'productos'},
                    titulo: 'Ventas o pedidos',
                    icono: 'mdi-clover',
                    url: require('../../assets/productos.png')
                },
                {
                    accion: 'Buscar',
                    subtitulo: '',
                    redireccion: {name: 'locales'},
                    titulo: 'Puntos de venta',
                    icono: 'mdi-store',
                    url: require('../../assets/locales.png')
                },
                {
                    accion: 'Comprar',
                    subtitulo: '',
                    redireccion: {name: 'productos'},
                    titulo: 'Productos',
                    icono: 'mdi-cart-plus',
                    url: require('../../assets/productos.png')
                },
                {
                    accion: 'Areas',
                    subtitulo: '',
                    redireccion: {name: 'areas'},
                    titulo: 'Areas',
                    icono: 'mdi-account',
                    url: require('../../assets/areas.png')
                }
            ]
        }
    }
}
</script>