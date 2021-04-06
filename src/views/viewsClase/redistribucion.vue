<template>
    <v-app >
        <v-app-bar app color="green">
        </v-app-bar>
        <v-main fluid>
            <v-row class="mb-3">
                   <v-col>
                       <v-btn @click="ejercicio=0" block dark color="red" >Ejercicio 1</v-btn>
                   </v-col>
                   <v-col>
                       <v-btn @click="ejercicio=1" block dark color="green" >Ejercicio 2</v-btn>
                   </v-col>
               </v-row>
           <v-window v-model="ejercicio">
               
               <v-window-item>
                   <v-row class="mx-5">
                        <v-col class="columna" cols="12" sm=2 >
                        </v-col>
                        <v-col cols="10">
                            <v-row class="mx-0">
                                <v-toolbar color="purple">
                                    <v-toolbar-title>Ejercicio 1</v-toolbar-title>
                                </v-toolbar>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="6" v-for="(item,index) in 2" :key="index">
                                    <v-card height="250" color="orange" class="mx-auto">
                                    </v-card>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col v-for="(item,index) in 10" :key="index" :md="(index+1)==3 || (index+1)==8? '4':'2'" sm="4" cols="6" >
                                    <v-card  height="85" color="blue" class="mx-auto">
                                        {{index+1}}
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
               </v-window-item>
               <v-window-item>
                   <v-row class="mx-5">
                       <v-col>
                           <v-row>
                               <v-col cols="12">
                                   <v-card height="50" color="blue" >
                                       EJERCICIO 2
                                   </v-card>
                               </v-col>
                           </v-row>
                           <v-row>
                               <v-col v-for="(item,index) in 3" :key="index" cols="12" :sm="(index+1)==3 ? '12':'6'" md="4"   >
                                   <v-card color="red" height="300" >

                                   </v-card>
                               </v-col>
                           </v-row>
                           <v-row>
                               <v-col cols="12" md="6" v-for="(item,index) in 2" :key="index" >
                                   <v-card height="50" color="yellow">

                                   </v-card>
                               </v-col>
                           </v-row>
                       </v-col>
                   </v-row>
               </v-window-item>
           </v-window>
            
        </v-main>
        <v-footer app color="green" ></v-footer>
    </v-app>
</template>
<script>
export default {
    data(){
        return {
            ejercicio: 0
        }
    },
    computed: {
        width(){

            
            return window.innerWidth
        }
    }
}
</script>
<style>
.columna{
    background: grey!important
}
</style>