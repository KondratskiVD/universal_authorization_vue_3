<template>
  <div>
    <component :is="layout"></component>
  </div>
</template>
<script>
import AuthLayout from "@/layouts/auth/AuthLayout.vue";
import MainLayout from "@/layouts/main/MainLayout.vue";
import { MAIN_LAYOUT, AUTH_LAYOUT } from '@/constants'
import { onBeforeMount } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import firebase from 'firebase'

export default {
  name: 'App',
  setup () {
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          router.replace('/login');
        } else if (route.path == '/login' || route.path == '/register') {
          router.replace('/dashboard')
        }
      })
    })
  },

  components: {
    [MAIN_LAYOUT]: MainLayout,
    [AUTH_LAYOUT]: AuthLayout,
  },
  computed: {
    layout() {
      return this.$route.meta.auth ? MAIN_LAYOUT : AUTH_LAYOUT
    }
  },
}
</script>
<style>
</style>
