<template>
    <h1>My Creation</h1>
    <div class="form-group">
        <label for="artist">artist</label>
        <input
            v-model="artist"
            type="text"
            name="artist"
            class="form-control"
            :class="{ 'is-invalid': submitted && !artist }"
        />
    </div>

    <div class="form-group">
        <button class="btn btn-primary" @click="authTest">Login</button>
        <!--<router-link to="/register" class="btn btn-link"
                >Register</router-link
            >-->
    </div>
    <div class="albumslist-container">
        <div v-for="(item, index) in albums" :key="index">
            <AlbumList
                :album-id="item.data.uri.slice(14)"
                :name="item.data.name"
                :date="item.data.date.year"
                :cover-art="item.data.coverArt.sources[2].url"
            />
        </div>
    </div>
</template>

<script>
import AlbumList from '../components/AlbumList.vue'
export default {
    name: 'MyCreation',
    components: {
        AlbumList,
    },
    inject: ['api'],
    data() {
        return {
            artist: '',
            albums: [],
            submitted: false,
        }
    },

    mounted() {},
    methods: {
        authTest() {
            this.albums = []
            this.api.spotifyService.albums(this.artist).then((response) => {
                response.map((album) => {
                    const { name } = album.data.artists.items[0].profile
                    console.log(album)
                    if (name === this.artist) {
                        this.albums.push(album)
                    }
                })
            })
        },
        getAll() {
            this.api.userService.getAll().then((response) => {
                console.log(response)
            })
        },
    },
}
</script>

<style scoped>
.albumslist-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>
