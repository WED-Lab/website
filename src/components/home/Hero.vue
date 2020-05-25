<template>
  <div>
    <panel backgroundColor="bg-light-gray">
      <div class="w-full mx-auto">
        <div class="flex flex-col md:flex-row items-center">
          <div class="w-3/4 md:w-1/2">
            <g-image src="~/assets/images/brand/wed-lab-globe-large.png" alt="WEDLab Logo" />
          </div>
          <div class="w-full md:w-1/2 ml-0 md:ml-10">
            <h1 class="text-3xl md:text-4xl font-bold">Women's Empowerment in Development Lab</h1>

            <p class="text-2xl my-10">This Research-to-Practice Lab is bridging the gap between academics, practitioners and policy makers in Canada and globally on issues related to women's empowerment in developing countries. The lab is led by Prof. Sonia Laszlo in partnership with McGill Institute for the Study of International Development</p>

            <ul class="flex flex-col md:flex-row justify-between list-none">
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
</template>

<script>
import Panel from '~/components/ui/panel/Feature.vue'

export default {
  name: 'HomeHero',
  components: {
    Panel
  }
}
</script>
