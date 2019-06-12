<template>
  <div class="hello">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-body">
              <input type="text" placeholder="Choose your username" v-model="username">
            </div>
            <div class="modal-footer">
              <button class="modal-default-button" @click="addUser">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import db from '../firebaseConfig'

export default {
  name: 'AddUser',
  data() {
    return {
      username: null
    }
  },
  methods: {
    addUser() {
      if(this.username && this.username.trim().length > 0) {
        db.database().ref('/users').push(this.username)
      }

      window.localStorage.setItem('anonchatname', this.username)

      this.$emit('close')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
