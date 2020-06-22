<template>
  <div class="bg-light-gray">
    <div class="w-full mx-auto container py-16 md:py-32 px-5 md:px-5 flex flex-col lg:flex-row items-start">

      <div class="w-full lg:w-1/2 lg:pr-16">

        <h2 class="text-3xl font-bold text-gray-700">Special COVID-19 Webinar Series</h2>

        <p class="mt-10 mb-16 text-xl text-gray-600">This series of research-to-practice Webinars on the gender dimensions of COVID19 is organized by the Women’s Empowerment in Development (WED) Lab at McGill in partnership with the Institute for the Study of International Development and made possible thanks to funding from the Growth and Economic Opportunities for Women (GrOW 2) program, a multi-funder initiative by the Bill &amp; Melinda Gates Foundation, the William and Flora Hewlett Foundation and Canada’s International Development Research Centre.</p>

        <g-link
          class="btn btn-dark-turquoise"
          to="/seminars/">View all seminars</g-link>

      </div>

      <div class="w-full lg:w-1/2 mt-16 lg:mt-0">

        <h3 class="sr-only">Latest three seminars</h3>

        <div class="flex flex-col">

          <div v-for="edge in $static.seminars.edges" :key="edge.node.id"
            class="w-full my-4 flex hover:shadow-xl transition-all duration-300 ease-in">

            <div class="w-full p-10 bg-white rounded-lg">

              <h4 class="font-bold text-lg">{{ edge.node.title }}</h4>

              <p class="text-gray-600 mt-5">{{ edge.node.teaser }}</p>

              <g-link
                :to="edge.node.path"
                class="font-bold">
                Learn more
              </g-link>

            </div>

          </div>

        </div>

      </div>

    </div>
  </div>
</template>


<static-query>
query {
  seminars: allSeminar (limit:3, sortBy: "date", order: DESC, filter: { series: { in: ["covid"] }}) {
    edges {
      node {
        id
        title
        teaser
        path
      }
    }
  }
}
</static-query>

<script>

export default {
  name: 'HomeSeminars',
  components: {

  }
}
</script>
