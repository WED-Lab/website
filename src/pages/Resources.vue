<template>
  <Layout>
    <main>
      <content-panel>

        <h1 name="maincontent" id="maincontent">Gender and COVID-19 Resources</h1>

        <p>The list below provides informative resources to support organizations in their collection of gender data around the impact of COVID19. Although the list is not exhaustive, it provides a range of gender data to support research and policy makers who seek to provide a gender-sensitive response to reduce the gender inequalities experienced as a result of the pandemic.</p>

        <!-- Loop through all of the categories creating an accordion for each category -->

        <div
          v-for="category in $page.resources.edges"
          v-bind:key="category.node.id">
          <section>

            <accordion
              v-bind:title="category.node.title"
              v-bind:id="category.node.id"
              v-bind:content="category.node.content"
            />

          </section>
        </div>

        <p><strong>Disclaimer</strong> Links on this resource list are provided solely for the convenience of our website visitors. We are not responsible for the accuracy, currency or reliability of the content of such websites. WEDLab is not responsible for the information found through these links, nor does it endorse the sites and their content.</p>

      </content-panel>
    </main>
  </Layout>
</template>

<page-query>
query {
  resources: allResources {
    edges {
      node {
        id,
        title,
        content,
      }
    }
  }
}
</page-query>

<script>
import Accordion from '~/components/ui/accordion/ResourceAccordion.vue'
import ContentPanel from '~/components/ui/panel/Content.vue'

export default {
  metaInfo: {
    title: 'COVID-19 Resources'
  },

  data: function () {
    return {
      categories: [],
    }
  },

  methods: {

  },


  components: {
    ContentPanel,
    Accordion
  }
}
</script>

<style scoped>
</style>
