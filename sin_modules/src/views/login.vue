<template>
    <v-app>
        <v-main>
            <v-card class="mx-auto mt-15" max-width="500" >
                <v-card-text>
                    <h3> Titulo1  {{titulo}} </h3>
                    <br>
                    <h3> Titulo2 {{titulo2}} </h3>

                        <h3>Metodo de vue</h3>

                    <h3> {{ numero1 }} + {{numero2}} </h3>
                    <h3> {{resultado}} </h3>
                </v-card-text>
                <v-card-text>
                    <h3>Propuiedad computada</h3>
                     <h3> {{ numero1 }} + {{numero2}} </h3>
                     <h3> {{total}} </h3>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="indigo" dark @click="total_login" >
                       Total
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="green" dark @click="funcion_aux(100)" >
                        Funcion aux
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-main>
    </v-app>
</template>
<script>
export default {
    data(){
        return {
            titulo: 'Hola mundo soy frys',
            numero1: 0,
            numero2: 3,
            resultado: null,
            titulo2: 'ldaksdjajksdhakjh'
        }
    },
    watch: {


        numero2(){
            
            this.titulo = 'El resultado cambio porque el numero2 ha cambiado a: '+this.numero2
               
        },
        total(){
           
            this.titulo2 = 'El resultado de la propiedad computada es: '+this.total
            
        }
    },
    computed: {
        total(){ 
            let resultado =  this.numero1+this.numero2
            return resultado
        }
    },
    created(){

        setTimeout( () =>  {
            this.numero1 = 5
        },5000)
        setTimeout( () =>  {
            this.numero2 = 5
        },7000)

    },
    methods: {
        funcion_aux(numero){
            this.login(numero)
            console.log(this.total)
        },
        login(numero){
            this.numero2 = this.numero1 + numero
            
        },
        total_login(){
            this.resultado = this.numero1+this.numero2
        }
    }
}
</script>