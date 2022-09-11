<template>
    <h1>Login {{ isLogin }}</h1>
    <form v-if="!isLogin" @submit.prevent="handleSubmit">
        <div class="form-group">
            <label for="email">email</label>
            <input
                v-model="email"
                type="text"
                name="email"
                class="form-control"
                :class="{ 'is-invalid': submitted && !email }"
            />
            <div v-show="submitted && !email" class="invalid-feedback">
                email is required
            </div>
        </div>
        <div class="form-group">
            <label htmlFor="password">Password</label>
            <input
                v-model="password"
                type="password"
                name="password"
                class="form-control"
                :class="{ 'is-invalid': submitted && !password }"
            />
            <div v-show="submitted && !password" class="invalid-feedback">
                Password is required
            </div>
        </div>
        <div class="form-group">
            <button class="btn btn-primary">Login</button>
            <!--<router-link to="/register" class="btn btn-link"
                >Register</router-link
            >-->
        </div>
    </form>
    <div v-else>
        <p>You are connected!</p>
        <button @click="handleLogOut">LOGOUT</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'MyLogin',
    inject: ['api'],
    data() {
        return {
            email: '',
            password: '',
            submitted: false,
            isLogin: false,
        }
    },

    mounted() {
        if (localStorage.getItem('accessToken')) {
            this.isLogin = true
        } else {
            this.isLogin = false
        }
    },
    methods: {
        ...mapActions({
            login2: 'login2',
        }),
        handleSubmit() {
            this.submitted = true
            const { email, password } = this

            if (email && password) {
                this.api.userService
                    .login({ email, password })
                    .then((response) => response.json())
                    .then((user) => {
                        if (user.token) {
                            localStorage.setItem('id', JSON.stringify(user._id))
                            localStorage.setItem(
                                'accessToken',
                                JSON.stringify(user.token)
                            )
                            this.isLogin = true
                        }
                    })
                    .catch((error) => console.log(error))
            }
        },
        handleLogOut() {
            this.api.userService.logout()
            this.isLogin = false
        },
    },
}
</script>

<style scoped></style>
