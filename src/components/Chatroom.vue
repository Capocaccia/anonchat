<template>
    <div class="chatroom">
        Welcome: {{username}}

        <div class="messages">
            <div class="message"
                 :class="{mine: myMessage(message.user)}"
                 v-for="(message, idx) in messages"
                 :key="idx">
                <div class="message-user">
                    {{message.user}}
                </div>
                <div class="message-text">
                    {{message.text}}
                </div>
            </div>
        </div>

        <Chatbox></Chatbox>
    </div>
</template>

<script>
    import db from 'firebase'
    import Chatbox from './Chatbox'

    export default {
        name: "Chatroom",
        data() {
            return {
                messages: []
            }
        },
        props: [
            'username'
        ],
        methods: {
            getMessages() {
                db.database().ref('/chats').on('value', snapshot => {
                    if(snapshot.val())
                        this.messages = snapshot.val()
                })
            },
            myMessage(name) {
                if(name === this.$props.username)
                    return true
            }
        },
        mounted() {
          this.getMessages()
        },
        components: {
            Chatbox
        },
        computed: {},
        watch: {}

    }
</script>

<style scoped>

    .mine {
        border: 1px solid #EBEBF4;
        background-color: #2C2C38 !important;
    }

    .chatroom {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 100vw;
        align-items: center;

    }

    .messages {
        width: 30vw;
    }

    .message {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        background-color: #1D1D25;

    }

    .message-user {
        text-align: right;
    }

    .message-text {
        text-align: left;
    }

</style>