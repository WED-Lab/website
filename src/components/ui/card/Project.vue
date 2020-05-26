<template>
  <div class="w-full flex rounded-lg items-stretch shadow-xs md:shadow-md bg-white my-8 border border-solid border-gray-200 bg-white">
    <div class="w-1/12 sm:w-3/12">
      <g-image alt="" class=" rounded-lg rounded-r-none object-cover h-full" :src="project.cover_image" />
    </div>
    <div class="w-11/12 sm:w-9/12">
      <div class="flex flex-col px-5 pb-5 pt-2">
        <h2 class="text-gray-800 text-lg font-bold mt-1 mb-0">{{ project.title }}</h2>

        <p class="text-sm text-gray-500 font-semibold mb-0"><span class="sr-only">Author: </span>{{ project.author }}</p>

        <div class="flex flex-row-reverse">
          <g-link
            class="text-white bg-dark-turquoise rounded-lg p-2 font-bold hover:no-underline hover:bg-light-turquoise"
            :to="project.path">Read more<span class="sr-only"> about {{ project.title }}</span></g-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',

  props: {

    project : {
      type: Object,
      required: true,
      // Object or array defaults must be returned from
      // a factory function
      default: function () {
        return {
          title: 'Missing Title'
        }
      }
    },
  }
}
</script>
