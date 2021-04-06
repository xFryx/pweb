<template>
   <v-app class="primary">
       <!--
    <v-navigation-drawer app>
       
    </v-navigation-drawer>
      -->
    <v-app-bar app  >
        <v-row class="mt-15">
            <v-col>
                <v-row>
                    <v-toolbar min-height="100" class="color_header_footer" >
                        <v-row class="mt-5">
                            <v-col cols="1">
                                <v-img style="margin-top:15%" contain :aspect-ratio="16/16" src="https://cdn.unimagdalena.edu.co/images/escudo/bg_dark/384.png" ></v-img>
                            </v-col>
                             <v-col
                                cols="2"
                                xl
                                style="min-width: 100px; max-width: 100%;margin-top:1.5%;margin-left:1%"
                                
                            >
                                <v-row>
                                    <h4>"La autonomia</h4>
                                </v-row>
                                <v-row>

                                    <h6>y la </h6> <h4>exelencia</h4>
                                   
                                </v-row>
                                <v-row>
                                    <h4 >Siempre </h4><h6>lo</h6><h4>primero</h4>
                                </v-row>
                                <v-row>
                                    <h6>periodo 2012-2016 </h6><h4>"</h4>
                                </v-row>
                                
                            </v-col>
                            <v-col style="margin-top:1%" cols="6"> 
                                <v-img height="70" contain  src="https://cdn.unimagdalena.edu.co/images/calidad/bg-light/96.png"></v-img>
                            </v-col>
                        </v-row>
                        
                    </v-toolbar>
                    
                </v-row>
                <v-row>
                    <v-toolbar height="50" color="#cca338">
                        <v-row>
                            <v-col>
                                <v-btn text color="#b40808" block>Mi unimagdalena</v-btn>
                            </v-col>
                            <v-col>
                                <v-btn text color="white" block>Admiciones</v-btn>
                            </v-col>
                            <v-col>
                                <v-btn text color="white" block>Academico</v-btn>
                            </v-col>
                            <v-col>
                                <v-btn text color="white" block>investigacion</v-btn>
                            </v-col>
                        </v-row>
                    </v-toolbar>
                </v-row>
            </v-col>
            
        </v-row><!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

        <!-- Provides the application the proper gutter -->
       

        <!-- If using vue-router -->
            <router-view></router-view>
        
    </v-main>

    <v-footer height="50" dark class="color_header_footer" app>
            
           <strong>Copyright </strong> --  {{ new Date().getFullYear() }} 
        </v-footer>
    </v-app>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    created(){
        this.$vuetify.theme.themes.light.primary = '#e9e9e9' //Color de fondo
    },
}
</script>
<style src="../styles/estilos.css"></style>