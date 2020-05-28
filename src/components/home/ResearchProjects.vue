<template>
  <div>
    <panel backgroundColor="bg-light-gray" width="w-full" paddingHorizontal="px-0 sm:px-10">
      <section>
        <h2 class="text-5xl text-center font-bold">Research Projects</h2>

        <p class="w-3/5 mx-auto my-10 text-center">WED Lab members are engaged in projects related to women's empowerment in international development. Ongoing and closed projects are listed on this page.</p>

        <p class="text-center">
          <g-link class="text-xl font-bold" to="/projects/">See all projects</g-link>
        </p>

        <div v-if="$static.projects.edges.length > 0">
          <div class="mt-10 md:mx-10 mb-10 bg-white rounded-lg sm:shadow-lg pt-5 px-20 pb-5">

            <div
              v-for="edge in $static.projects.edges"
              :key="edge.node.title"
              class="my-20 flex flex-col lg:flex-row items-center">
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
