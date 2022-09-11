<template>
    <the-layout>
        <router-view v-slot="{ Component }">
            <component :is="Component" />
        </router-view>
    </the-layout>
</template>

<script>
import TheLayout from './components/TheLayout/TheLayout.vue'

export default {
    name: 'App',
    components: {
        TheLayout,
    },
}
</script>
