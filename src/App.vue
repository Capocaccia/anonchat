<template>
  <div id="app">

    <AddUser
            v-if="!username"
       v-on:close="closeModal"/>

    <chatroom v-if="username"
      :username="username"/>

    <UserList>
    </UserList>



  </div>
</template>

<script>
import AddUser from './components/AddUser.vue'
import db from './firebaseConfig'
import chatroom from "./components/Chatroom";
import UserList from "./components/UserList";

export default {
  name: 'app',
  data() {
    return {
      database: db.database(),
      dbRoot: db.database().ref('/'),
      username: null
    }
  },
  components: {
    chatroom,
    AddUser,
    UserList
  },
  methods: {
    checkActiveUser() {
      let name = window.localStorage.getItem('anonchatname')

      if (name) {
        this.username = name
      }

    },
    closeModal () {
      this.username = 'testing'
    }
  },
  mounted() {
    this.checkActiveUser()
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #EBEBF4;
    display: flex;
    justify-content: center;
    background-color: #1F1F27;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    padding: 0;
  }
</style>
