<template>
  <section class="relative bg-black overflow-hidden">
    <nav class="relative flex px-16 py-8 lg:py-0 justify-between bg-transparent">
      <div class="pr-14 flex items-center ">
        <a class="inline-block text-xl text-white font-medium font-heading" href="#">
          <img class="h-8" width="auto" src="~/assets/boldui-assets/logo/logo-boldui-light.svg" alt="" /></a>
      </div>
      <div class="hidden lg:block ml-auto mr-10 py-8">
        <ul class="flex items-center">
          <li class="mr-12">
            <a class="text-gray-500 hover:text-gray-400" href="#" contenteditable="false">Features</a>
          </li>
          <li class="mr-12">
            <a class="text-gray-500 hover:text-gray-400" href="#" contenteditable="false">NFTs
            </a>
          </li>
          <li class="mr-12">
            <a class="text-gray-500 hover:text-gray-400" href="#" contenteditable="false">Support</a>
          </li>
          <li class="mr-12">
            <a class="text-gray-500 hover:text-gray-400" href="#" contenteditable="false">About</a>
          </li>
          <li>
            <a class="text-gray-500 hover:text-gray-400" href="#" contenteditable="false">Build</a>
          </li>
        </ul>
      </div>
      <div class="hidden lg:flex items-center">
        <a class="inline-flex items-center justify-center py-3 px-6 rounded-full bg-yellow-300 hover:bg-yellow-400 transform duration-200"
          href="#">
          <svg class="mr-3" width="16" height="9" viewbox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.01 3.16553H0V5.24886H12.01V8.37386L16 4.20719L12.01 0.0405273V3.16553Z" fill="black"></path>
          </svg><span class="text-xs font-heading">Sign Up</span>
        </a>
      </div>
      <button class="navbar-burger lg:hidden self-center">
        <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="6" width="24" height="2" fill="white"></rect>
          <rect y="11" width="24" height="2" fill="white"></rect>
          <rect y="16" width="24" height="2" fill="white"></rect>
        </svg>
      </button>
    </nav>
    <div class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
      <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
      <nav class="relative flex flex-col py-8 px-10 w-full h-full bg-black border-r overflow-y-auto">
        <a class="inline-block text-xl text-white font-medium font-heading mb-16 md:mb-32" href="#">
          <img class="h-8" width="auto" src="~/assets/boldui-assets/logo/logo-boldui-light.svg" alt="" /></a>
        <ul class="mb-32">
          <li class="mb-10">
            <a class="flex items-center" href="#">
              <span class="mr-3 text-lg text-white">About</span>
              <svg width="16" height="9" viewbox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.01 3.48047H0V5.57278H12.01V8.71124L16 4.52663L12.01 0.34201V3.48047Z" fill="#FFEC3E"></path>
              </svg></a>
          </li>
          <li class="mb-10">
            <a class="flex items-center" href="#">
              <span class="mr-3 text-lg text-white">Company</span>
              <svg width="16" height="9" viewbox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.01 3.48047H0V5.57278H12.01V8.71124L16 4.52663L12.01 0.34201V3.48047Z" fill="#FFEC3E"></path>
              </svg></a>
          </li>
          <li class="mb-10">
            <a class="flex items-center" href="#">
              <span class="mr-3 text-lg text-white">Services</span>
              <svg width="16" height="9" viewbox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.01 3.48047H0V5.57278H12.01V8.71124L16 4.52663L12.01 0.34201V3.48047Z" fill="#FFEC3E"></path>
              </svg></a>
          </li>
          <li>
            <a class="flex items-center" href="#">
              <span class="mr-3 text-lg text-white">Contact</span>
              <svg width="16" height="9" viewbox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.01 3.48047H0V5.57278H12.01V8.71124L16 4.52663L12.01 0.34201V3.48047Z" fill="#FFEC3E"></path>
              </svg></a>
          </li>
        </ul>
        <a class="flex mb-8 items-center justify-center py-4 px-6 rounded-full bg-blue-500 hover:bg-blue-600 transform duration-200"
          href="#">
          <svg class="mr-3" width="16" height="9" viewbox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.01 3.16553H0V5.24886H12.01V8.37386L16 4.20719L12.01 0.0405273V3.16553Z" fill="black"></path>
          </svg><span class="text-sm font-medium uppercase tracking-wider">Sign Up</span>
        </a>
        <a class="flex mb-10 items-center text-white hover:underline" href="#">
          <span class="mr-2 text-sm">Log In</span>
          <svg width="16" height="10" viewbox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.01 3.95383H0V6.04614H12.01V9.1846L16 4.99998L12.01 0.815369V3.95383Z" fill="#FFEC3E"></path>
          </svg></a>
        <p class="text-sm text-gray-500">
          All rights reserved © BoldUI 2021
        </p>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>
