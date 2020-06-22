<template>
  <div class="flex flex-col w-full my-4 mb-10 p-8 bg-white rounded-lg hover:shadow-xl transition-all duration-300 ease-in">
    <div class="order-2">
      <h2 class="text-gray-800 text-lg font-bold mt-1 mb-0">{{ publication.title }}</h2>
    </div>
    <div class="order-1 flex flex-row justify-between">
      <p class="text-sm text-gray-500 font-semibold mb-0"><span class="sr-only">Type: </span>{{ publication.type }}</p>
      <p class="text-sm text-gray-500 font-semibold mb-0"><span class="sr-only">Year: </span>{{ publication.year }}</p>
    </div>
    <div class="text-gray-700 order-3">{{ publication.authors }}</div>
    <div class="text-gray-600 order-4">{{ publication.source }}</div>
    <div class="order-6 mt-10 mb-2">
      <a class="btn btn-dark-turquoise"
        :href="publication.href"
        rel="external"
        target="_blank">Access<span class="sr-only"> {{ publication.title }}</span></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicationCard',

  props: {

    publication : {
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
