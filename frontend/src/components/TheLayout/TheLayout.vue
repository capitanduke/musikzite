<template>
    <div class="main-container">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'TheLayout',
}
</script>

<style lang="scss">
html,
body,
#app {
    height: 100%;
    background-color: $musikzite-dark-background;
}

h1 {
    font-family: 'Roboto-Bold';
    font-size: 45px;
    font-weight: 700;
    margin: 0;
    color: $musikzite-primary-color;
}

.main-container {
    display: flex;
    flex-direction: column;
    margin: 0 10rem;
}
</style>
