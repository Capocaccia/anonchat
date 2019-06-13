<template>
    <div class="user-list">
        <h2>Active Users</h2>
        <ul class="users">
            <li class="user"
                v-for="(user, idx) in users"
                :key="idx">
                {{user}}
            </li>
        </ul>
    </div>
</template>

<script>
    import db from '../firebaseConfig'

    export default {
        name: "UserList",
        data() {
            return {
                users: null
            }
        },
        props: [],
        methods: {
            getUsers() {
                db.database().ref('/users').on('value', snapshot => {
                    if(snapshot.val())
                        this.users = snapshot.val()
                })
            },
        },
        computed: {},
        watch: {},
        mounted() {
            this.getUsers()
        }

    }
</script>

<style scoped>
    .user-list {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 5vw;
        padding: 1rem;
        background-color: #2C2C38;
        border-radius: 10px 10px 10px 10px;
        margin: 1rem;
    }

    h2 {
        margin: 0.25rem;
    }

    .users {
        padding: 0 0 0 1.25rem;
    }

    .user {
        padding: 0.1rem;
    }
</style>