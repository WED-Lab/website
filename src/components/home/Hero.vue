<template>
  <div class="bg-white">
    <div class="w-full lg:w-full mx-auto container flex flex-col lg:flex-row items-center py-16 md:py-32 px-5 md:px-5">
      <div class="w-full lg:w-1/2 order-2 md:order-2">

        <!--
        <p class="py-2 px-4 inline shadow-md no-underline rounded-lg bg-gray-700 text-white font-sans font-semibold text-sm border-blue btn-primary">Special COVID-19 Webinar Series</p>
        -->

        <h2 class="text-3xl font-bold text-gray-700">{{ webinar.title }}</h2>

        <p class="text-2xl"><span class="sr-only">Date: </span>{{ webinar.date }} - <span class="text-xl">{{ webinar.time }}</span></p>

        <!-- <p class="text-xl"><span class="sr-only">Time: </span>{{ webinar.time }}</p> -->

        <p class="text-gray-600">{{ webinar.description }}</p>

        <p class="mt-12">

        <a
          :href="webinar.registrationLink"
          rel="external"
          class="btn btn-dark-turquoise mr-5">Register<span class="sr-only"> for {{ webinar.title }}</span></a>

        <g-link
          :to="webinar.path"
          class="btn btn-outline-dark-turquoise">Learn more<span class="sr-only"> about {{ webinar.title }}</span></g-link>

        </p>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/2 mb-10 lg:mb-0 pl-0 lg:pl-16 order-1 lg:order-2">
        <g-image
          alt=""
          src="~/assets/images/home/hero/webinar.svg"
          quality="100"
          class="w-full h-auto rounded-lg object-contain" />
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
        path: '/seminars/covid-19-gender-lens-refugee-settings/',
        title: 'Using a gender lens to address COVID19 response in Refugee Settings',
        date: 'Tuesday, August 04, 2020',
        time: '10:00 AM – 11:30 AM (EDT)',
        registrationLink: 'https://us02web.zoom.us/webinar/register/WN_I5jjfZmGTjKdqgyG5z1yeg',
        description: 'A diverse panel of experts from the worlds of international development research and practice will discuss research priorities and possible policy solutions for refugees.'
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
  background-image: linear-gradient(180deg, #f4f7f8 40%, #ffffff 100%);
}

</style>
