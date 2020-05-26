<template>
  <Layout>
    <main>
      <content-panel backgroundColor="bg-light-gray">

        <h1>Publications</h1>

        <p>Selected publication produced by <abbr>WED</abbr> Lab members are listed on this page. Publications include journal articles, books and book chapters, media coverage, and policy briefs.</p>

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
