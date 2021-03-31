<template>
  <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <div class="vx-row no-gutter justify-center items-center">

          <div class="vx-col hidden lg:block lg:w-1/2">
            <img src="@/assets/images/pages/login.png" alt="login" class="mx-auto">
          </div>

          <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
            <div class="px-8 pt-8 login-tabs-container">

              <div class="vx-card__title mb-4">
                <h4 class="mb-4">Login</h4>
                <p>Welcome back, please login to your account.</p>
              </div>




            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Login"
}
</script>

<style scoped>

</style>
