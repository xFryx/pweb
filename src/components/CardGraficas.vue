<template>
  <v-card
    class="mt-4 mx-auto"
    max-width="400"
    
  >
    <v-sheet
      class="v-sheet--offset mx-auto"
      :color="color"
      elevation="12"
      max-width="calc(100% - 32px)"
      @click="$store.commit('redireccion',redireccion)"
    >
      <slot name="header"></slot>
    </v-sheet>
     <slot name="body"></slot>
  </v-card>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        default: 'Titulo'
      },
      color: {
        type: String,
        default: 'indigo'
      },
      redireccion: {
        type: String,
        required: true,
      }
    },
    data: () => ({

    }),
  }
</script>
<style>
  .v-sheet--offset {
    top: -24px;
    position: relative;
  }
</style>