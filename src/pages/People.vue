<template>
  <Layout>
    <main>
      <content-panel backgroundColor="bg-light-gray">

        <h1 class="mb-5 text-5xl text-dark-turquoise font-extrabold">People</h1>

        <p>The WED Lab is comprised of interdisciplinary researchers working on projects related to women's empowerment in developing countries.</p>

        <div
          class="pb-10"
          v-for="category in categories"
          v-bind:key="category.id">
          <section>
            <h2>{{ category.heading }}</h2>

            <div class="flex flex-row flex-wrap -mx-2">
              <people-card
                v-for="person in correctCategoryFilter(category.id)"
                v-bind:key="person.id"
                v-bind:person="person.node" />
            </div>

          </section>
        </div>

      </content-panel>
    </main>
  </Layout>
</template>

<page-query>
query {
  people: allPeople (sortBy: "lastName", order: ASC) {
    edges {
      node {
        id,
        path,
        title,
        positionTitle,
        lastName
        category,
        image,
        readMore
      }
    }
  }
}
</page-query>

<script>
import PeopleCard from '~/components/ui/card/People.vue'
import ContentPanel from '~/components/ui/panel/Content.vue'

export default {
  metaInfo: {
    title: 'People'
  },

  data: function () {
    return {
      categories: [
         {
          'id': 'faculty',
          'heading': 'Faculty'
        },
        {
          'id': 'practice',
          'heading': 'Professors of practice'
        },
        {
          'id': 'passed',
          'heading': 'Passed associates'
        }
      ]
    }
  },

  methods: {

    correctCategoryFilter: function (id) {
      return this.$page.people.edges.filter( function (el) {
        return el.node.category.toLowerCase() === id.toLowerCase()
      })
    }

  },

  components: {
    PeopleCard,
    ContentPanel
  }
}
</script>

<style scoped>
</style>
