<template>
  <div>
    <panel>
      <div class="text-center">

        <h2 class="text-4xl">WED Lab Seminar Series</h2>

        <p class="my-16 text-2xl">Seven research-to-practice seminars for students, scholars, practitioners and policymakers on topics related to women’s empowerment in development.</p>

        <g-link
          class="text-xl text-white text-center bg-dark-turquoise rounded-lg py-2 px-5 font-bold hover:no-underline hover:bg-light-turquoise"
          to="/seminars/">Learn more <span class="sr-only">about WED Lab Seminar Series</span></g-link>

      </div>

    </panel>
  </div>
</template>

<script>
import Panel from '~/components/ui/panel/Feature.vue'

export default {
  name: 'HomeSeminars',
  components: {
    Panel
  }
}
</script>
