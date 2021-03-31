<template>
  <div>
    <component :is="layout"></component>
  </div>
</template>
<script>
import AuthLayout from "@/layouts/auth/AuthLayout.vue";
import MainLayout from "@/layouts/main/MainLayout.vue";
import { MAIN_LAYOUT, AUTH_LAYOUT } from '@/constants'

export default {
  name: 'App',
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
