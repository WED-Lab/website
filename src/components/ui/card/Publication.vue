<template>
  <div class="flex flex-col justify-center w-full rounded-lg shadow-xs md:shadow-sm bg-white my-8 p-4">
    <div class="order-2">
      <h2 class="text-gray-800 text-lg font-bold mt-1 mb-0">{{ publication.title }}</h2>
    </div>
    <div class="order-1 flex flex-row justify-between">
      <p class="text-sm text-gray-500 font-semibold mb-0"><span class="sr-only">Type: </span>{{ publication.type }}</p>
      <p class="text-sm text-gray-500 font-semibold mb-0"><span class="sr-only">Year: </span>{{ publication.year }}</p>
    </div>
    <div class="text-gray-700 order-3">{{ publication.authors }}</div>
    <div class="text-gray-600 order-4">{{ publication.source }}</div>
    <div class="order-6 mt-5 mb-2">
      <a class="text-white bg-dark-turquoise rounded-lg p-2 font-bold hover:no-underline hover:bg-light-turquoise" :href="publication.href" rel="external">Access<span class="sr-only"> {{ publication.title }}</span></a>
    </div>
  </div>
  <!--
    <div class="flex flex-col justify-center items-center">
      <div class="w-full rounded-lg shadow-lg bg-white my-3">
        <div class="flex justify-between border-b border-gray-100 px-5 py-4">
      		<div>
              <i class="fas fa-exclamation-circle text-blue-500"></i>
              <span class="font-bold text-gray-700 text-lg">{{ publication.type }}</span>
          	</div>
          <div>
              <button><i class="fa fa-times-circle text-red-500 hover:text-red-600 transition duration-150"></i></button>
          	</div>
      	</div>

      	<div class="px-10 py-5 ">
          <h2 class="text-lg text-gray-600">{{ publication.title }}</h2>
      	</div>

      	<div class="px-5 py-4 flex justify-end">
          <button class="text-sm py-2 px-3 text-gray-500 hover:text-gray-600 transition duration-150">Close</button>
      	</div>
	    </div>
    </div>

  </div>
  -->
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
