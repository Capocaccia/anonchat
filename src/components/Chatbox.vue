<template>
    <div>
        <input type="text" v-model="message">
        <button class="submit" @click="sendMessage">Send</button>
    </div>
</template>

<script>
    import db from '../firebaseConfig'

    export default {
        name: "Chatbox.vue",
        data() {
            return {
                message: null
            }
        },
        props: [],
        methods: {
            sendMessage() {
                if(this.message && this.message.trim().length > 0 && this.getUsername())

                    db.database().ref('/chats').once('value')
                        .then((snapshot) => {
                            if(snapshot.val().length > 200)
                                db.database().ref('/chats').set(snapshot.val().slice(0, 199))
                        })

                    db.database().ref('/chats').push({
                        text: this.message,
                        user: window.localStorage.getItem('anonchatname')
                    })

                    this.resetMessage()

            },
            getUsername() {
                return window.localStorage.getItem('anonchatname')
            },
            resetMessage() {
                this.message = null
            }
        },
        computed: {},
        watch: {}
    }
</script>

<style scoped>

</style>