<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      :aspect-ratio="16/9"
      contain
      :src="imagen"
    >
      <v-card-title> {{titulo}} </v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
     {{descripcion}}
    </v-card-subtitle>

    <v-card-text class="text--primary">
     <slot name="body"></slot>
    </v-card-text>

    <v-card-actions>
      <slot name="actions"></slot>
    </v-card-actions>  
  </v-card>
</template>
<script>
export default {
    props: {
        imagen: {
            type: String,
            
            //default: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
        },
        titulo: {
            type: String,
            required: true,
            default: 'Nombre del area'
        },
        descripcion: {
            type: String,
            //required: true,
            default: 'Descripcion... Esta area hace tal cosa...'
        },
        
    },
    data(){
        return{

        }
    },
    methods: {
        
    }
}
</script>