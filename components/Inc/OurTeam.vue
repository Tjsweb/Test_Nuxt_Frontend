<template>
  <section class="relative py-24 bg-black overflow-hidden">
    <img class="absolute top-0 left-0 mt-64 lg:mt-0 object-contain"
      src="~/assets/boldui-assets/elements/shadow-team-light-blue.svg" alt="" />
    <div class="relative container mx-auto px-4">
      <div class="flex flex-wrap items-center justify-center -mx-4">
        <div class="hidden md:inline-flex flex-shrink-0 order-first items-center justify-center h-40 lg:h-52 w-40 lg:w-52"
          style="
                  background-image: url('~/assets/boldui-assets/elements/ellipse.svg');
                  background-size: contain;
                  background-repeat: no-repeat;
                ">
          <a href="#">
            <svg width="16" height="9" viewbox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.99 3.13846H16V5.23077H3.99V8.36923L0 4.18462L3.99 0V3.13846Z" fill="#FFEC3E"></path>
            </svg>
          </a>
        </div>
        <div class="w-full lg:w-auto text-center mx-auto">
          <span class="text-lg font-semibold text-blue-400">Meet our team</span>
          <div class="mt-8 max-w-md mx-auto">
            <img class="h-96 mx-auto" src="~/assets/boldui-assets/images/team-5.png" alt="" />
            <h3 class="text-lg text-white font-heading mb-1">
              Clara Osborne
            </h3>
            <p class="mb-6 text-sm text-gray-500 uppercase font-semibold tracking-widest">
              Product Designer
            </p>
            <div class="flex justify-center mb-4">
              <a class="mr-10" href="#">
                <img src="~/assets/boldui-assets/brands/small-logos/facebook-yellow.svg" alt="" />
              </a>
              <a class="mr-10" href="#">
                <img src="~/assets/boldui-assets/brands/small-logos/twitter-yellow.svg" alt="" />
              </a>
              <a class="mr-10" href="#">
                <img src="~/assets/boldui-assets/brands/small-logos/instagram-yellow.svg" alt="" />
              </a>
              <a class="mr-10" href="#">
                <img src="~/assets/boldui-assets/brands/small-logos/github-yellow.svg" alt="" />
              </a>
              <a href="#">
                <img src="~/assets/boldui-assets/brands/small-logos/linkedin-yellow.svg" alt="" />
              </a>
            </div>
            <p class="mb-10 text-lg text-gray-500">
              If you have ever wondered how to develop your brand, this is
              the place for you. Take a big step forward in growing your
              business with this great tool.
            </p>
            <div class="relative text-center">
              <button class="inline-block w-3 h-3 mr-6 bg-blue-500 rounded-full"></button>
              <button class="inline-block w-3 h-3 mr-6 bg-gray-500 rounded-full"></button>
              <button class="inline-block w-3 h-3 mr-6 bg-gray-500 rounded-full"></button>
              <button class="inline-block w-3 h-3 bg-gray-500 rounded-full"></button>
            </div>
          </div>
        </div>
        <div
          class="hidden md:inline-flex flex-shrink-0 order-first lg:order-last items-center justify-center h-40 lg:h-52 w-40 lg:w-52"
          style="
                  background-image: url('~/assets/boldui-assets/elements/ellipse.svg');
                  background-size: contain;
                  background-repeat: no-repeat;
                ">
          <a href="#">
            <svg width="17" height="9" viewbox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.9902 3.70731H0.980225V5.79962H12.9902V8.93808L16.9802 4.75346L12.9902 0.568848V3.70731Z"
                fill="#FFEC3E"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: 'OurTeam'
}
</script>
