<template>
  <div class="bg-light-gray">
    <div class="w-full mx-auto container py-16 md:py-32 px-5 md:px-5 flex flex-col lg:flex-row items-start border-t-2">

      <div class="w-full lg:w-1/2 lg:pr-16">

        <h2 class="text-3xl font-bold text-gray-700">Research Projects</h2>

        <p class="mt-10 mb-16 text-xl text-gray-600">WED Lab members are engaged in projects related to women's empowerment in international development.</p>

        <g-link
          class="btn btn-dark-turquoise"
          to="/projects/">View all projects</g-link>


      </div>

      <div class="w-full lg:w-1/2 mt-16 lg:mt-0">

        <h3 class="sr-only">Three Featured Projects</h3>

        <div class="flex flex-col">

          <div v-for="edge in $static.projects.edges" :key="edge.node.id"
            class="w-full my-4 flex hover:shadow-xl transition-all duration-300 ease-in">

            <div class="w-full p-10 bg-white rounded-lg">

              <h4 class="font-bold text-lg">{{ edge.node.title }}</h4>

              <p class="text-gray-600 mt-5">{{ edge.node.author }}</p>

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
<!--
  <div>
    <panel width="w-full" paddingHorizontal="px-0 sm:px-10">
      <section>
        <h2 class="text-4xl md:text-5xl text-center font-bold">Research Projects</h2>

        <p class="px-2 md:px-0 md:w-3/5 mx-auto my-10 text-center">WED Lab members are engaged in projects related to women's empowerment in international development.</p>

        <p class="text-center">
          <g-link class="text-xl font-bold" to="/projects/">See all projects</g-link>
        </p>

        <div v-if="$static.projects.edges.length > 0">
          <div class="mt-5 md:mx-10 mb-10 px-0 md:px-10 pb-5">

            <div
              v-for="edge in $static.projects.edges"
              :key="edge.node.title"
              class="my-12 p-5 md:p-10 flex flex-col lg:flex-row items-center rounded-lg hover:bg-light-gray hover:shadow-xl transition duration-500 ease-in-out">
              <div class="order-2 lg:ml-10 text-center lg:text-left">
                <h3 class="text-2xl text-gray-800 font-bold mb-0 mt-5 lg:mt-0">{{ edge.node.title }}</h3>
                <p class="mt-2 text-gray-600"><span class="sr-only">Project participant: </span>{{ edge.node.author }}</p>
                  <div class="mt-6">
                    <g-link
                      :to="edge.node.path"
                      class="bg-dark-turquoise text-white px-5 py-3 font-semibold rounded hover:bg-darker-turquoise hover:no-underline">Read more</g-link>
                  </div>
              </div>
              <g-image
                alt=""
                :src="edge.node.cover_image"
                quality="70"
                class="order-1 w-full lg:w-1/3 rounded-lg rounded-lg object-cover" />
            </div>

          </div>
        </div>

      </section>
    </panel>
  </div>
-->
</template>

<static-query>
query {
	projects: allProject (limit:4, filter: { home_feature: {eq: true} }) {
    edges {
      node {
        title
        author
        cover_image
        path
      }
    }
  }
}
</static-query>

<script>
import Panel from '~/components/ui/panel/Feature.vue'

export default {
  name: 'HomeResearchProjects',

  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
