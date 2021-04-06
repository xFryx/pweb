<template>
  <v-app>
    <v-parallax src="https://picsum.photos/1920/1080?random" :height="altura" :width="ancho">
      <v-main>
        <v-container fluid class="fill-height">
          <v-row align="center" justify="center">
            <v-card class="elevation-12 my-auto" shaped max-width="700">
              <v-window>
                <v-window-item>
                  <v-row>
                    <v-col cols="12" md="8" sm="8" xs="8" class="blue-grey lighten-3">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-3 mb-5">
                          <span class="indigo--text text--darken-4">
                            <strong>STR</strong>
                          </span>
                          <span class="blue--text text--darken-3">
                            <strong>MANAGER</strong>
                          </span>
                        </h1>
                        <div class="text-center" mt-4></div>

                        <!---->
                        <v-form>
                          <v-container fluid>
                            <v-text-field
                              label="Email"
                              name="Email"
                              prepend-icon="mdi-email blue--text text--darken-3"
                              type="text"
                              v-model="datosInicio.usuario"
                              rounded
                              background-color="rgba(238,249,253,.1)"
                            />
                            <v-text-field
                              rounded
                              label="Password"
                              name="Password"
                              v-model="datosInicio.clave"
                              prepend-icon="mdi-lock blue--text text--darken-3"
                              type="password"
                              background-color="rgba(238,249,253,.1)"
                            />
                          </v-container>

                          <div class="text-center mt-5">
                            <v-btn
                              rounded
                              color="indigo darken-4"
                              text
                              block
                              @click="login()"
                            >Ingresar</v-btn>
                          </div>
                        </v-form>
                      </v-card-text>
                      <v-divider vertical></v-divider>
                    </v-col>

                    <v-col cols="12" md="4" sm="4" xs="4" class="white">
                      <v-container>
                        <v-card width="200">

                        </v-card>
                      </v-container>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-row>
        </v-container>
      </v-main>
    </v-parallax>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      datosInicio: {
        usuario: "",
        clave: ""
      },
      altura: null,
      ancho: null
    };
  },
    created() {
    //this.$vuetify.theme.dark = true;
    //this.$router.push('/admin')
    this.altura = window.innerHeight;
    this.ancho = window.innerWidth;
    //this.prueba() 
  },
  methods: {
  
    login() {
        this.$router.push('/administrador')
    }
  }
};
</script>