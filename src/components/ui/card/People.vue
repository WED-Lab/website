<template>
  <div class="w-full sm:w-1/2 px-2 mb-5">
    <div class="flex flex-col items-center rounded-lg shadow-xs md:shadow-md bg-white h-full p-4">
      <!--  border border-solid border-gray-200  -->
      <div class="flex-shrink-0 h-32 w-32">
        <!--<img class="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />-->
        <!-- <g-image src="~/assets/images/people/sonia-laszlo.jpg" class="h-16 w-16 rounded-full" />-->
        <g-image alt="" class="h-32 w-32 rounded-full shadow-xl" :src="person.image" />

      </div>
      <div class="mt-6 text-center">
        <dl>
          <dt class="sr-only">Name</dt>
          <dd class="text-xl leading-5 font-medium text-gray-900">{{ person.title }}</dd>

          <dt class="sr-only">Title</dt>
          <dd class="mt-2 text-sm leading-5 font-medium text-gray-600">{{ person.positionTitle }}</dd>
        </dl>

      </div>
      <div class="my-4">
        <g-link
          class="text-white bg-dark-turquoise rounded-lg p-2 font-bold hover:no-underline hover:bg-light-turquoise"
          :to="person.path">Read more<span class="sr-only"> about {{ person.title }}</span></g-link>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'PeopleCard',

  props: {

    person : {
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
