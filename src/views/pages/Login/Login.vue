<template>
  <div class="flex justify-center h-screen items-center">
    <div class="w-full max-w-xs">
      <form
        @submit.prevent="Login"
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Ваша почта
          </label>
          <input
            v-model="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Введите email">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Ваш пароль
          </label>
          <input
            v-model="password"
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Введите пароль">
          <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div class="flex items-center justify-between">
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Войти
          </button>
          <router-link class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/register">
            Регистрация
          </router-link>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2021 <a href="http://github.com/KondratskiVD">github.com/KondratskiVD.</a>
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import firebase from 'firebase'

export default {
  setup () {
    const email = ref('');
    const password = ref('');

    const Login = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then(data => console.log(data))
        .catch(err => console.log(err.message))
    }
    return {
      Login, email, password
    }
  }
}
</script>

<style scoped>
</style>
