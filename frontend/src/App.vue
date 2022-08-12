<template>
    <the-layout>
        <router-view v-slot="{ Component }">
            <component :is="Component" />
        </router-view>
    </the-layout>
</template>

<script>
import MyLogin from './components/MyLogin.vue'
import TheLayout from './components/TheLayout/TheLayout.vue'

export default {
    name: 'App',
    components: {
        MyLogin,
        TheLayout,
    },
}
</script>
