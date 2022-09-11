<template>
    <div v-for="(item, index) in tracks" :key="index">
        <div>{{ item.track.name }}</div>
    </div>
</template>

<script>
export default {
    name: 'InnerAlbum',
    inject: ['api'],
    data() {
        return {
            tracks: [],
        }
    },
    mounted() {
        const { id } = this.$route.params
        this.api.spotifyService.albumTracks(id).then((res) => {
            this.tracks = res.album.tracks.items
            console.log('tracks', this.tracks)
        })
    },
}
</script>

<style scoped></style>
