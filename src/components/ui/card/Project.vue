<template>
  <div class="flex flex-col lg:flex-row w-full my-4 mb-10 p-8 bg-white rounded-lg hover:shadow-xl transition-all duration-300 ease-in">

    <div class="w-full lg:w-3/4 order-2 lg:order-1">
      <h2 class="text-gray-700 text-lg font-bold mt-1 mb-0">{{ project.title }}</h2>

      <p class="text-gray-600 mt-5"><span class="sr-only">Author: </span>{{ project.author }}</p>

      <g-link
        :to="project.path"
        class="font-bold">
        Read more
      </g-link>
    </div>
    <div class="w-full lg:w-1/4 order-1 lg:order-2">
      <g-image alt="" class="mb-8 lg:mb-0 rounded-lg object-cover h-full" :src="project.cover_image" />
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
