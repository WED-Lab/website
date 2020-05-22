<template>
  <Layout>
    <main>
      <content-panel>

        <h1 class="mb-5 text-5xl text-dark-turquoise font-extrabold">Projects</h1>

        <p>WED Lab members are engaged in projects related to women's empowerment in international development. Ongoing and closed projects are listed on this page.</p>

        <div
          v-for="status in statuses"
          v-bind:key="status.id">
          <section>
            <h2 class="mb-0">{{ status.heading }}</h2>

            <project-card
              v-for="project in correctStatusFilter(status.id)"
              v-bind:key="project.id"
              v-bind:project="project.node" />

          </section>
        </div>

      </content-panel>
    </main>
  </Layout>
</template>

<page-query>
query {
  projects: allProject {
    edges {
      node {
        id
        title
        author
        project_status
        cover_image (width: 770, height: 380, blur: 10)
        path
      }
    }
  }
}
</page-query>

<script>
import ProjectCard from '~/components/ui/card/Project.vue'
import ContentPanel from '~/components/ui/panel/Content.vue'

export default {
  metaInfo: {
    title: 'Projects'
  },

  data: function () {
      return {
        statuses: [
          {
            'id': 'open',
            'heading': 'Open projects'
          },
          {
            'id': 'closed',
            'heading': 'Closed projects'
          }
        ]
      }
    },

  methods: {

    correctStatusFilter: function (id) {
      return this.$page.projects.edges.filter( function (el) {
        return el.node.project_status.toLowerCase() === id.toLowerCase()
      })
    }

  },


  components: {
    ContentPanel,
    ProjectCard
  }
}
</script>

<style scoped>
</style>
