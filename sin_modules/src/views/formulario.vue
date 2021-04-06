<template>
  <v-app>
    <v-main>
      <v-row>
        <v-col>
          <v-card class="mx-auto" width="500">
            <v-toolbar>
              <v-toolbar-title>Un titulo</v-toolbar-title>
            </v-toolbar>
            <v-card-text></v-card-text>
            <v-card-actions></v-card-actions>
          </v-card>
        </v-col>
        <v-col>
          <v-card width="500">
            <v-toolbar>
              <v-toolbar-title>Un titulo</v-toolbar-title>
            </v-toolbar>
            <v-card-text></v-card-text>
            <v-card-actions></v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      valid: true,
      datos_formulario: {
        nombre: "",
        apellido: "",
        correo: "",
        programa: "",
        comentario: "",
        checkbox: false
      },
      search: "",
      headers: [
        {
          text: "Nombre",
          align: "start",
          sortable: false,
          value: "nombre"
        },
        { text: "Apellido", value: "apellido" },
        { text: "Correo", value: "correo" },
        { text: "Programa", value: "programa" },
        { text: "Comentario", value: "comentario" }
      ],
      datos_guardados: []
    };
  },
  methods: {
    enviar_datos() {
      console.log(this.datos_formulario);
      this.datos_guardados.push(this.datos_formulario);
      this.datos_formulario = {
        nombre: "",
        apellido: "",
        correo: "",
        programa: "",
        comentario: "",
        checkbox: false
      };
      this.$refs.form.resetValidation();
    }
  }
};
</script>
<style>

.v-card
.v-sheet{
    background-color: indigo!important
}
.v-toolbar{
    background-color: red!important
}
.v-toolbar__title {
    font-size: 2.25rem;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: lighter;
    color: white;
}

/*
    .v-card{
        background: red!important;
        max-width: 600px!important;
    }
    .v-card__title{
        font-style: italic;
    }
    .v-card__text{
        background: blue
    }
    .col{
        flex-basis: 0!important;
        flex-grow: 1!important;
        max-width: 50%!important
    }
    .v-application {
        font-family: "Times", sans-serif;
        line-height: 1.5;
    }
    */
</style>