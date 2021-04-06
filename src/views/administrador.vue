<template>
    <v-app>
        <v-app-bar dark app color="blue darken-4">
           
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <h3> STRMANAGER - Nombre empresa </h3>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer"
            temporary=""
            app
            width="150"
        >
        </v-navigation-drawer>
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>
<script>
export default {
    data(){
        return {
            drawer: false
        }
    },
    created(){

    },
}
</script>