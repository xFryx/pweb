<template>
    <div
        :class="clase"
        class="transition-swing font-weight-bold"
        v-text="texto"  
    >
    </div>
                                    
</template>
<script>
export default {
    props: {
        clase: {
           // type: Array,
            default: [`text-h4 mb-${-1}`]
        },
        texto:{
            type: String,
            required: true,
        }
    }
}
</script>