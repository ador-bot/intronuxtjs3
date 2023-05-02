<template>
   
    <div>
        <h1>
            Error Econtrado
        </h1>
        <h3>
            {{ error.statusCode }} - {{ error.statusMessage }}
        </h3>
        <button @click="handleError">Clean Error</button>
    </div>
</template>

<script setup>

const route = useRoute();

const {error} = defineProps({
    error: Object
});

const path = route.path === error.url ? "/" : route.path

const handleError = () => {
    clearError({
        redirect: path
    })
}
;
</script>
<style scoped>
div{
    text-align: center;
}
</style>