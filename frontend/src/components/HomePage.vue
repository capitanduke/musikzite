<template>
    <h1>HOME</h1>
</template>

<script>
export default {
    name: 'HomePage',
    mounted() {
        console.log(localStorage.getItem('id'))
        console.log(localStorage.getItem('accessToken'))
    },
}
</script>
