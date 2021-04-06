<template>
    <v-app class="primary">
        <v-main>
                <v-sheet color="rgb(0,0,0,0)" class="mx-5 mt-3">
                    <v-row>
                        <v-col cols="8">
                            <v-row class="mx-5" v-for="(lorem,index) in lorems" :key="index">
                                <v-card  class="my-5">
                                    <v-card-title style="color:#b40808"> Content {{index+1}} </v-card-title>
                                    <v-card-subtitle style="font-style: italic;"> This was posted on the 2nd March 2013 Admin</v-card-subtitle>
                                    <v-card-text>
                                        {{lorem}}
                                    </v-card-text>
                                </v-card>
                            </v-row>    
                        </v-col>
                        <v-col>
                            <v-row v-for="(side,index) in side_bars " :key="index">
                                <v-card max-width="300" class="my-5">
                                    <v-card-title style="color:#00437A" > {{side}} </v-card-title>
                                    <v-card-text>
                                        {{lorem2}}
                                    </v-card-text>
                                </v-card>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-sheet>
        </v-main>
    </v-app>
</template>
<script>
export default {
    data(){
        return{
            side_bars: ['Top Sidebar','Middle sidebar','Bottom Sidebar'],
            lorems: [
            `lorem impsum dolor its amet lorem impsum dolor its amet lorem impsum dolor its amet
             lorem impsum dolor its amet  lorem impsum dolor its amet  lorem impsum dolor its amet  lorem impsum dolor its amet
              lorem impsum dolor its amet  lorem impsum dolor its amet lorem impsum dolor its amet lorem impsum dolor its ametlorem impsum dolor its amet lorem impsum dolor its amet lorem impsum dolor its amet
             lorem impsum dolor its amet  lorem impsum dolor its amet  lorem impsum dolor its amet  lorem impsum dolor its amet
              lorem impsum dolor its amet  lorem impsum dolor its amet lorem impsum dolor its amet lorem impsum dolor its ametlorem impsum dolor its amet lorem impsum dolor its amet lorem impsum dolor its amet
             lorem impsum dolor its amet  lorem impsum dolor its amet  lorem impsum dolor its amet  lorem impsum dolor its amet
              lorem impsum dolor its amet  lorem impsum dolor its amet lorem impsum dolor its amet lorem impsum dolor its ametlorem impsum dolor its amet lorem impsum dolor its amet lorem impsum dolor its amet
             lorem impsum dolor its amet  lorem impsum dolor its amet  lorem impsum dolor its amet  lorem impsum dolor its amet
              lorem impsum dolor its amet  lorem impsum dolor its amet lorem impsum dolor its amet lorem impsum dolor its amet`,
            `lorem impsum dolor its amet lorem impsum dolor its amet lorem impsum dolor its amet
             lorem impsum dolor its amet  lorem impsum dolor its amet  lorem impsum dolor its amet  lorem impsum dolor its amet
              lorem impsum dolor its amet  lorem impsum dolor its amet lorem impsum dolor its amet lorem impsum dolor its amet`
            ],
            lorem2: 'lorem impsum dolor its amet lorem impsum dolor its amet lorem impsum dolor its ametlorem impsum dolor its amet lorem impsum dolor its amet lorem impsum dolor its amet',
        
        }
    },
    created(){
        console.log('Hola')
    },
}
</script>