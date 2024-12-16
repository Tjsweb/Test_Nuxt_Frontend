<template>
 <div class="bg-gray-700">
<authheader/>




    <section class="relative pt-24 lg:py-44">
  <img class="hidden lg:block absolute top-0 left-0 h-full w-1/2" src="~/assets/trizzle-assets/images/placeholder-laptop-dark-light.png" alt="">
  <div class="container px-4 mx-auto">
    <div class="lg:w-1/2 ml-auto">
      <div class="relative max-w-xs lg:max-w-md mx-auto text-center">
        <a class="inline-block mx-auto mb-10" href="#">
          <img class="block" src="~/assets/trizzle-assets/logos/Kalakar.png" alt="">
        </a>
      </div>
      <div class="relative max-w-md mx-auto">
        <div class="text-center mb-10">
          <h2 class="text-2xl text-gray-100 font-semibold mb-2">Sign up with new account</h2>
          <p class="text-gray-300 font-medium">Start your journey with us</p>
        </div>
        <form action="">
          <div class="relative w-full h-14 py-4 px-3 mb-8 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
            <span class="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-600">Name</span>
            <input class="block w-full outline-none bg-transparent text-sm text-gray-100 font-medium" id="signInInput5-1" type="text">
          </div>
          <div class="relative w-full h-14 py-4 px-3 mb-8 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
            <span class="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-600">Email*</span>
            <input class="block w-full outline-none bg-transparent text-sm text-gray-100 font-medium" id="signInInput5-2" type="email">
          </div>
          <div class="relative w-full h-14 py-4 px-3 mb-4 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
            <span class="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-600">Password*</span>
            <input class="block w-full outline-none bg-transparent text-sm text-gray-100 font-medium" id="signInInput5-3" type="password">
          </div>
          <span class="block text-xs text-gray-300 font-semibold mb-6">Must be at least 12 characters.</span>
          <button class="block w-full py-4 mb-4 leading-6 text-white font-semibold bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-200">Create account</button>
          <a class="flex items-center justify-center w-full py-4 mb-6 leading-6 text-white font-semibold bg-gray-500 hover:bg-gray-700 rounded-lg transition duration-200" href="#">
            <div class="w-4 bg-white rounded-sm">
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5 0H14L8 4.738L2 0H1.5C0.672 0 0 0.672 0 1.5V10.5C0 11.328 0.672 12 1.5 12H2V2.646L8 7.261L14 2.645V12H14.5C15.328 12 16 11.328 16 10.5V1.5C16 0.672 15.328 0 14.5 0Z" fill="#F44336"></path>
              </svg>
            </div>
            <span class="ml-3">Sign In with Gmail</span>
          </a>
          <p class="font-medium text-center">
            <span class="text-gray-300">Already have an acoount?</span>
            <a class="inline-block text-blue-500 hover:underline" href="#">Sign In</a>
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
}
</script>

<style>

</style>