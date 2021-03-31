<template>
  <div>
    <p>{{ name }}</p>
    <button @click="Logout">выйти</button>
  </div>
</template>

<script>
import {ref} from "vue";
import { onBeforeMount } from 'vue';
import firebase from "firebase";

export default {
  name: "Dashboard",
  setup () {
    const name = ref('');

    onBeforeMount(() => {
      const user = firebase.auth().currentUser;
      if (user) {
        name.value = user.email.split('@')[0]
      }
    })

    const Logout = () => {
      firebase
          .auth()
          .signOut()
          .then(() => console.log('Вы вышли'))
          .catch(err => console.log(err.message))
    }
    return {
      Logout, name
    }
  }
}
</script>

<style scoped>

</style>
