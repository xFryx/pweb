<template>
       <v-sheet class="mt-n15" >
            <v-toolbar  dark color="indigo">
                <v-btn @click="$router.go(-1)" icon > <v-icon>mdi-arrow-left</v-icon> </v-btn>
                <v-toolbar-title>  {{titulo}}  </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn @click="dialogo_crear=true;editar=false" dark rounded color="white" style="color:blue" >Crear {{titulo}} </v-btn>
            </v-toolbar>
            <v-row>
                <v-col v-for=" (item,index) in items " :key="index">
                    <Card class="mx-5 my-3" :imagen="item.imagen" :titulo="item.nombre" >
                        <template slot="body">
                            <h3> {{item.nombre}} - {{index+1}}</h3> 
                        </template>
                        <template slot="actions">
                            <v-btn @click="dialogo_crear=true;editar=true" dark  icon color="green"> <v-icon>mdi-pencil</v-icon></v-btn>
                            <v-spacer></v-spacer>
                            <v-btn dark rounded color="indigo"> Revisar <v-icon>mdi-eye</v-icon>  </v-btn>
                        </template>
                    </Card>
                </v-col>
            </v-row>
            <v-dialog max-width="700" persistent v-model="dialogo_crear">
                <v-toolbar dark>
                    <h2>  {{ editar==true ? 'Editar':'Crear' }} {{titulo}} </h2>
                  
                    <v-spacer></v-spacer>
                    <v-btn @click="dialogo_crear=false" icon> <v-icon>mdi-close</v-icon> </v-btn>
                </v-toolbar>
                <v-card>
                    <br>
                    <h3 style="font-style: italic"> {{titulo_dialogo}}
                    </h3>
                    <v-card-text class="my-5">
                        <v-form>
                        
                                <v-col cols="10" class="mx-auto">
                                    <v-text-field prepend-icon="mdi-store" rounded filled label="Nombre del area"></v-text-field>
                                </v-col>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn dark :color="editar==true ? 'green':'indigo'" block> {{ editar==true ? 'Editar':'Crear' }}  </v-btn>
                    </v-card-actions>
                    
                   
                </v-card>
            </v-dialog>
       </v-sheet>      
</template>
<script>
import Card from './Card'
//import Vue from 'vue'
export default {
    components: {
        Card,
    },
    props: {
        titulo: {
            type: String,
            required: true,
            default: 'Un titulo'
        },
        
        items: {
            type: Array,
            required: true,
        }
    },

    data(){
        return {
            dialogo_crear: false,
            editar: false,
        }
    },
    created(){

    },
    computed: {

        titulo_dialogo(){

            if(this.editar){
                return 'Edita los dintintos '+this.titulo+' De tu empresa'
            }else{
                return 'Crea los dintintos '+this.titulo+' De tu empresa'
            }
        }

    },
}
</script>
<style>
h3{
    text-align:center
}

</style>