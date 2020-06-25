<template>
  <div class="bg-white">
    <div class="w-full lg:w-full mx-auto container flex flex-col lg:flex-row items-center py-16 md:py-32 px-5 md:px-5">
      <div class="w-1/2 sm:w-1/3 md:1/2 lg:1/3 order-1 lg:order-2">

        <g-image src="~/assets/images/brand/wed-lab-globe-large.png"
          alt="WEDLab Logo"
          class="xl:p-10" />

      </div>
      <div class="w-full md:w-4/5 lg:w-2/3 mb-10 lg:mb-0 pl-0 lg:pl-16 order-1 lg:order-2">

        <h2 class="text-3xl font-bold text-gray-700">Women's Empowerment in Development Lab</h2>

        <p class="text-gray-600 mb-12">This Research-to-Practice Lab is bridging the gap between academics, practitioners and policy makers in Canada and globally on issues related to women's empowerment in developing countries. The lab is led by Prof. Sonia Laszlo in partnership with McGill Institute for the Study of International Development</p>

        <g-link
          to="/about/"
          class="btn btn-outline-dark-turquoise">Learn more<span class="sr-only"> about Women's Empowerment in Development Lab</span></g-link>

      </div>
    </div>

 <!--
  <div>
    <panel backgroundColor="bg-white">
      <div class="w-full mx-auto">
        <div class="flex flex-col md:flex-row items-center">
          <div class="w-3/4 sm:w-9/12 md:hidden lg:block md:w-1/2">
            <g-image src="~/assets/images/brand/wed-lab-globe-large.png" alt="WEDLab Logo" />
          </div>
          <div class="w-full lg:w-1/2 ml-0 md:ml-10">
            <h2 class="mt-16 md:mt-0 text-4xl md:text-5xl md:text-center lg:text-left font-bold">Women's Empowerment in Development Lab</h2>

            <p class="mt-10 mb-10 md:text-center lg:text-left">This Research-to-Practice Lab is bridging the gap between academics, practitioners and policy makers in Canada and globally on issues related to women's empowerment in developing countries. The lab is led by Prof. Sonia Laszlo in partnership with McGill Institute for the Study of International Development</p>

            <ul class="mt-16 flex flex-col md:flex-row justify-between list-none">
              <li>
                <g-link
                  class="text-center block md:inline text-xl text-white bg-dark-turquoise rounded-lg py-2 px-5 font-bold hover:no-underline hover:bg-light-turquoise"
                  to="/publications/">Publications</g-link>
              </li>
              <li>
                <g-link
                  class="my-10 md:my-0 text-center block md:inline text-xl text-white bg-dark-turquoise rounded-lg py-2 px-5 font-bold hover:no-underline hover:bg-light-turquoise"
                  to="/projects/">Projects</g-link>
              </li>
              <li>
                <g-link
                  class="text-center block md:inline text-xl text-white bg-dark-turquoise rounded-lg py-2 px-5 font-bold hover:no-underline hover:bg-light-turquoise"
                  to="/people/">People</g-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </panel>
  </div>
  -->

  </div>
</template>

<script>
import Panel from '~/components/ui/panel/Feature.vue'

export default {
  name: 'HomeAbout',
  components: {
    Panel
  }
}
</script>
