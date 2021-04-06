<template>
    <v-app>
        <v-main>
            <v-card min-width="300" max-width="400" class="mx-auto" rounded="md" elevation="5" >
                    <v-card-text>
                        <v-img
                                alt="user"
                                :src="imagen"
                                class="mx-auto"
                                :aspect-ratio="16/9"
                            >
                        </v-img>
                        <v-card-title>
                            {{titulo}}
                        </v-card-title>

                        <v-card-subtitle>
                            {{subtitulo}}
                        </v-card-subtitle>
                    </v-card-text>
                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-row>
                            <v-col cols="1">
                                <v-icon>
                                    mdi-cash
                                </v-icon>
                            </v-col>
                            <v-col>
                                Precio: {{precio}}
                            </v-col>
                        </v-row>
                    </v-card-actions>
                
                </v-card>
        </v-main>
    </v-app>
</template>
<script>
export default {
    data(){
        return {
            titulo: this.$route.params.data.titulo,
            subtitulo: this.$route.params.data.subtitulo,
            imagen: this.$route.params.data.imagen,
        }
    },
    created(){
        console.log(this.$route.params)

    },
}
</script>