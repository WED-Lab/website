<template>
  <Layout>
    <main>
      <content-panel backgroundColor="bg-light-gray">

        <h1>Publications</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>

        <publication-card
          v-for="publication in $page.publications.edges[0].node.data"
          v-bind:key="publication.title"
          v-bind:publication="publication" />

      </content-panel>
    </main>
  </Layout>
</template>

<page-query>
query {
  publications: allPublications {
    edges {
      node {
        data {
          title,
          source,
          authors,
          type,
          year,
          href
        }
      }
    }
  }
}
</page-query>

<script>
import PublicationCard from '~/components/ui/card/Publication.vue'
import ContentPanel from '~/components/ui/panel/Content.vue'

export default {
  metaInfo: {
    title: 'People'
  },

  components: {
    ContentPanel,
    PublicationCard
  }
}
</script>

<style scoped>
</style>
