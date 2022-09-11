<template>
    <div @click="openAlbum(albumId)">
        <p>{{ albumId }}</p>
        <h2>{{ name }}</h2>
        <h4>{{ date }}</h4>
        <img :src="coverArt" alt="coverArt" />
    </div>
</template>

<script>
export default {
    name: 'AlbumList',
    inject: ['api'],
    props: {
        albumId: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        date: {
            type: Number,
            required: true,
        },
        coverArt: {
            type: String,
            required: true,
        },
    },
    methods: {
        openAlbum(id) {
            this.$router.push({
                name: 'InnerAlbum',
                params: { id: id },
            })
        },
    },
}
</script>

<style scoped></style>
