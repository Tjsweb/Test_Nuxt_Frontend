<template>
  <div class="bg-gray-700">
    <authheader/>
  <section class="relative pt-24 lg:py-44 bg-gray-700">
  <img class="hidden lg:block absolute top-0 left-0 h-full w-1/2" src="~/assets/trizzle-assets/images/placeholder-laptop-dark-light.png" alt="">
  <div class="container px-4 mx-auto">
    <div class="lg:w-1/2 ml-auto">
      <div class="relative max-w-xs lg:max-w-md mx-auto text-center">
        <a class="inline-block mx-auto mb-10" href="#">
          <img class="block" src="~/assets/trizzle-assets/logos/Kalakar.png" alt="">
        </a>
        <h2 class="text-2xl text-gray-100 font-semibold mb-2">Log in to your account</h2>
        <p class="text-gray-300 font-medium mb-10">Welcome back! Please enter your details.</p>
        <form action="">
          <div class="relative w-full h-14 py-4 px-3 mb-8 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
            <span class="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-600">Email</span>
            <input class="block w-full outline-none bg-transparent text-sm text-gray-100 font-medium" id="signInInput3-1" type="email">
          </div>
          <div class="relative w-full h-14 py-4 px-3 mb-6 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
            <span class="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-600">Password</span>
            <input class="block w-full outline-none bg-transparent text-sm text-gray-100 font-medium" id="signInInput3-2" type="password">
          </div>
          <div class="flex flex-wrap items-center justify-between mb-6">
            <div class="flex items-center mb-4 sm:mb-0">
              <input id="signInInput3-3" type="checkbox">
              <label class="ml-2 text-xs text-gray-300 font-semibold" for="">Remember for 30 days</label>
            </div>
            <div class="w-full sm:w-auto"><a class="inline-block text-xs font-semibold text-blue-500 hover:text-blue-600" href="#">Forgot password?</a></div>
          </div>
          <button class="block w-full py-4 mb-4 leading-6 text-white font-semibold bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-200">Sign In</button>
          <a class="flex items-center justify-center w-full py-4 mb-6 leading-6 text-white font-semibold bg-gray-500 hover:bg-gray-700 rounded-lg transition duration-200" href="#">
            <div class="w-4 bg-white rounded-sm">
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5 0H14L8 4.738L2 0H1.5C0.672 0 0 0.672 0 1.5V10.5C0 11.328 0.672 12 1.5 12H2V2.646L8 7.261L14 2.645V12H14.5C15.328 12 16 11.328 16 10.5V1.5C16 0.672 15.328 0 14.5 0Z" fill="#F44336"></path>
              </svg>
            </div>
            <span class="ml-3">Sign In with Gmail</span>
          </a>
          <p class="font-medium">
            <span class="text-gray-300">Don’t have an account?</span>
            <a class="inline-block text-blue-500 hover:underline" href="#">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  </div>
  <img class="lg:hidden mt-24" src="~/assets/trizzle-assets/images/placeholder-laptop-dark-light.png" alt="">
</section>
</div>
</template>

<script>
import Authheader from '~~/components/AuthComponent/Authheader.vue'
export default {
  components: { Authheader },
layouts: 'publicLayout',
}
</script>

<style>

</style>