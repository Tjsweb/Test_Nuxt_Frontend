<template>
  <section class="bg-black overflow-x-hidden">
    <div class="py-20 border-t">
      <div class="mb-10 md:mb-20 pb-20 border-b">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap -mx-4">
            <div class="w-full md:w-2/5 px-4 mb-12 md:mb-0">
              <div class="relative flex">
                <img class="hidden md:block absolute h-52 w-52 top-0 left-0 -ml-20 -mt-20"
                  src="~/assets/boldui-assets/elements/ellipse.svg" alt="" />
                <span class="inline-block mr-8">
                  <svg width="32" height="33" viewbox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M30.9945 11.3916L18.5515 1.76009C17.0417 0.614719 14.9592 0.614719 13.4494 1.76009L0.954461 11.3916C0.590024 11.6519 0.381775 12.1205 0.381775 12.5891V30.7068C0.381775 31.4877 0.954461 32.1125 1.68333 32.2166H30.3176C31.0465 32.1125 31.6192 31.4877 31.6192 30.7068V12.5891C31.6192 12.1205 31.411 11.6519 30.9945 11.3916ZM3.50552 27.2707V16.5458L8.86794 22.3247L3.50552 27.2707ZM18.8119 18.3159C17.1979 16.8582 14.8031 16.8582 13.1891 18.3159L11.1066 20.1902L4.28645 12.7973L15.3757 4.25909C15.7402 3.94671 16.2608 3.94671 16.6252 4.25909L27.7145 12.7973L20.8944 20.2422L18.8119 18.3159ZM28.4955 27.2707L23.1851 22.3768L28.4955 16.5458V27.2707Z"
                      fill="#FFEC3E"></path>
                  </svg>
                </span>
                <h3 class="mb-6 text-xl text-white font-heading">
                  Subscribe
                </h3>
              </div>
              <div class="max-w-sm">
                <p class="mb-4 text-gray-500">
                  Etiam pellentesque non nibh non pulvinar mauris posuere.
                </p>
                <div class="flex px-8 py-4 bg-yellow-900 rounded-full border border-white">
                  <input class="w-full bg-transparent text-white placeholder-white outline-none" type="email"
                    placeholder="Type your e-mail" />
                  <button class="flex items-center text-yellow-300 hover:text-yellow-400">
                    <svg class="mt-1" width="16" height="8" viewbox="0 0 16 8" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.01 3H0V5H12.01V8L16 4L12.01 0V3Z" fill="currentColor"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="w-full md:w-3/5 px-4">
              <div class="flex flex-wrap -mx-4">
                <div class="w-1/2 md:w-1/4 px-4 mb-12 md:mb-0">
                  <h3 class="mb-8 text-sm text-white uppercase font-heading">
                    Company
                  </h3>
                  <ul>
                    <li class="mb-8">
                      <a class="text-gray-500 hover:text-gray-400" href="#">Careers</a>
                    </li>
                    <li class="mb-8">
                      <a class="text-gray-500 hover:text-gray-400" href="#">Press</a>
                    </li>
                    <li>
                      <a class="text-gray-500 hover:text-gray-400" href="#">Blog</a>
                    </li>
                  </ul>
                </div>
                <div class="w-1/2 md:w-1/4 px-4 mb-12 md:mb-0">
                  <h3 class="mb-8 text-sm text-white uppercase font-heading">
                    Pages
                  </h3>
                  <ul>
                    <li class="mb-8">
                      <a class="text-gray-500 hover:text-gray-400" href="#">Login</a>
                    </li>
                    <li class="mb-8">
                      <a class="text-gray-500 hover:text-gray-400" href="#">Register</a>
                    </li>
                    <li class="mb-8">
                      <a class="text-gray-500 hover:text-gray-400" href="#">Add list</a>
                    </li>
                    <li>
                      <a class="text-gray-500 hover:text-gray-400" href="#">Contact</a>
                    </li>
                  </ul>
                </div>
                <div class="w-1/2 md:w-1/4 px-4">
                  <h3 class="mb-8 text-sm text-white uppercase font-heading">
                    Legal
                  </h3>
                  <ul>
                    <li class="mb-8">
                      <a class="text-gray-500 hover:text-gray-400" href="#">Terms</a>
                    </li>
                    <li class="mb-8">
                      <a class="text-gray-500 hover:text-gray-400" href="#">About Us</a>
                    </li>
                    <li class="mb-8">
                      <a class="text-gray-500 hover:text-gray-400" href="#">Team</a>
                    </li>
                    <li>
                      <a class="text-gray-500 hover:text-gray-400" href="#">Privacy</a>
                    </li>
                  </ul>
                </div>
                <div class="w-1/2 md:w-1/4 px-4">
                  <h3 class="mb-8 text-sm text-white uppercase font-heading">
                    Resources
                  </h3>
                  <ul>
                    <li class="mb-8">
                      <a class="text-gray-500 hover:text-gray-400" href="#">Blog</a>
                    </li>
                    <li class="mb-8">
                      <a class="text-gray-500 hover:text-gray-400" href="#">Service</a>
                    </li>
                    <li class="mb-8">
                      <a class="text-gray-500 hover:text-gray-400" href="#">Product</a>
                    </li>
                    <li>
                      <a class="text-gray-500 hover:text-gray-400" href="#">Pricing</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-between">
          <a class="inline-block text-xl text-white font-medium font-heading mb-8 md:mb-0" href="#">
            <img class="h-8" src="~/assets/boldui-assets/logo/logo-boldui-light.svg" alt="" width="auto" />
          </a>
          <p class="mb-8 md:mb-0 text-gray-500">
            All rights reserved © BoldUI 2021
          </p>
          <div class="w-full md:w-auto">
            <div class="flex flex-wrap">
              <a class="mr-8" href="#">
                <img src="~/assets/boldui-assets/brands/small-logos/facebook.svg" alt="" />
              </a>
              <a class="mr-8" href="#">
                <img src="~/assets/boldui-assets/brands/small-logos/twitter.svg" alt="" />
              </a>
              <a class="mr-8" href="#">
                <img src="~/assets/boldui-assets/brands/small-logos/instagram.svg" alt="" />
              </a>
              <a class="mr-8" href="#">
                <img src="~/assets/boldui-assets/brands/small-logos/github.svg" alt="" />
              </a>
              <a href="#">
                <img src="~/assets/boldui-assets/brands/small-logos/linkedin.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
