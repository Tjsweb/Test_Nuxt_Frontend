<template>

  <body class="antialiased bg-body text-body font-body bg-gray-900">
    <div class="">
      <Dashboardheader />
      <section class="py-3">
        <div class="container px-4 mx-auto">
          <div class="p-8 bg-gray-500 rounded-xl">
            <div
              class="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20">
              <div class="w-full sm:w-auto px-4 mb-8 sm:mb-0">
                <h4 class="text-2xl font-bold tracking-wide text-white mb-1" contenteditable="false">Send Litecoin</h4>
                <p class="text-sm text-gray-300">Update your billing details and address</p>
              </div>
              <div class="w-full sm:w-auto px-4">
                <div><a
                    class="inline-block py-2 px-4 mr-3 text-xs text-center font-semibold leading-normal text-gray-400 bg-gray-600 hover:bg-gray-700 rounded-lg transition duration-200"
                    href="#">Cancel</a><a
                    class="inline-block py-2 px-4 text-xs text-center font-semibold leading-normal text-blue-50 bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-200"
                    href="#">Send</a></div>
              </div>
            </div>
            <form action="" contenteditable="false">
              <div class="flex flex-wrap items-start -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20">
                <div class="w-full sm:w-1/3 px-4 mb-8 sm:mb-0">
                  <span class="block mt-5 text-sm font-medium text-gray-100" contenteditable="false">Receiver
                    Address</span>
                </div>
                <div class="w-full sm:w-2/3 px-4">
                  <div class="max-w-xl">
                    <div class="flex flex-wrap -mx-4 -mb-10">
                      <div class="w-full md:w-2/3 px-4 mb-10">
                        <div
                          class="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
                          <span
                            class="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500"
                            contenteditable="false"></span>
                          <input
                            class="block w-full outline-none bg-transparent text-gray-50 placeholder-gray-50 font-semibold"
                            id="accountInput1-3" type="email" placeholder="4242 24424 42424 24" contenteditable="false">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20">
                <div class="w-full sm:w-1/3 px-4 mb-8 sm:mb-0">
                  <span class="text-sm font-medium text-gray-100" contenteditable="false">Amount in Litecoin</span>
                </div>
                <div class="w-full sm:w-2/3 px-4">
                  <div class="max-w-xl">
                    <input
                      class="block py-4 px-3 w-full text-sm text-gray-50 placeholder-gray-50 font-medium outline-none bg-transparent border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg"
                      id="formInput1-3" type="text" placeholder="20 LTC">
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap items-start -mx-4" contenteditable="false">
                <div class="w-full sm:w-1/3 px-4 mb-8 sm:mb-0">
                  <span class="block mt-5 text-sm font-medium text-gray-100" contenteditable="false">Remarks</span>
                </div>
                <div class="w-full sm:w-2/3 px-4">
                  <div class="max-w-xl">
                    <div class="flex flex-wrap -mx-4 -mb-10">
                      <div class="w-full px-4 mb-10">
                        <div
                          class="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
                          <span
                            class="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500"
                            contenteditable="false"></span>
                          <textarea
                            class="block w-full outline-none bg-transparent text-gray-50 placeholder-gray-50 font-semibold"
                            id="formInput2-11" type="text"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  </body>
</template>

<script>
import Dashboardheader from '~~/components/DasboardComponent/Dashboardheader.vue'
export default {
  components: { Dashboardheader },
}
</script>
