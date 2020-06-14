<template>
  <div class="bg-light-gray">
    <div class="w-full lg:w-4/5 mx-auto container flex flex-col md:flex-row items-center py-16 md:py-32 px-5 md:px-5">
      <div class="w-full md:w-2/3 order-2 md:order-1">
        <p class="py-2 px-4 inline shadow-md no-underline rounded-lg bg-gray-700 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2">Special COVID-19 Webinar Series</p>

        <h2 class="text-4xl font-bold text-gray-700">{{ webinar.title }}</h2>

        <p class="text-2xl"><span class="sr-only">Date: </span>{{ webinar.date }} - <span class="text-xl">{{ webinar.time }}</span></p>

        <!-- <p class="text-xl"><span class="sr-only">Time: </span>{{ webinar.time }}</p> -->

        <p>This webinar will discuss current issues around COVID-19 and the care economy for women in the Global South. A diverse panel of experts from the worlds of international development research and practice will discuss research priorities and possible policy solutions for women and the care economy.</p>

        <p class="mt-10">
          <!--
        <a
          :href="webinar.registrationLink"
          rel="external"
          class="bg-dark-turquoise text-white px-5 py-3 font-semibold rounded hover:bg-darker-turquoise hover:no-underline">Register<span class="sr-only"> for {{ webinar.title }}</span></a>
          -->
        <g-link
          to="/seminars/care-economy-global-south/"
          rel="external"
          class="bg-dark-turquoise text-white px-5 py-3 font-semibold rounded hover:bg-darker-turquoise hover:no-underline">Learn more<span class="sr-only"> for {{ webinar.title }}</span></g-link>

        </p>
      </div>
      <div class="w-full md:w-1/3 mb-10 md:mb-0 pl-0 md:pl-10 order-1 md:order-2">
        <g-image
          alt=""
          src="~/assets/images/home/hero/managing-people.svg"
          quality="100"
          class="sr-only w-full h-auto rounded-lg object-contain" />
      </div>
    </div>

    <!--
      <div class="flex items-stretch rounded-lg">
        <div class="w-1/2 rounded-l-lg text-gray-700 p-10">
          <h2 class="text-4xl font-bold text-gray-700">Short webinar title</h2>
          <p class="">Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Pellentesque euismod dui sed varius porta. Cras lorem leo, porttitor iaculis pharetra nec, cursus feugiat mauris. Nunc ut arcu arcu. Nam ut eleifend velit. </p>
          <p class="mt-10">
          <a
            href=""
            rel="external"
            class="bg-dark-turquoise text-white px-5 py-3 font-semibold rounded hover:bg-darker-turquoise hover:no-underline">Register<span class="sr-only"> for ...</span></a>
        </p>
        </div>
        <g-image
          alt=""
          src="~/assets/images/home/research-projects/project-03.jpg"
          quality="80"
          class="w-1/2 h-auto rounded-lg object-cover object-center" />
      </div>
    -->
  </div>
</template>

<script>
import Panel from '~/components/ui/panel/Feature.vue'

export default {
  name: 'HomeHero',

  data: function () {
    return {
      webinar: {
        title: 'COVID-19 and the Care Economy in the Global South',
        date: 'Thursday, June 11, 2020',
        time: '10:00-11:30 AM (EDT)',
        registrationLink: 'https://us02web.zoom.us/webinar/register/WN_Dl1TK6E9RkaSimkHGFToTQ',
      }
    }
  },

  components: {
    Panel
  }
}
</script>

<style scoped>
.hero-background {
  background-image:
    linear-gradient(
      45deg,
      rgba(121, 206, 216),
      rgba(220, 56, 51)
    );
}

</style>
