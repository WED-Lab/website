<template>
  <Layout>
    <main>
      <content-panel>

        <h1 class="mb-5 text-5xl text-dark-turquoise font-extrabold">Seminars</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>

        <div v-if="numberOfEvents(false) > 0">
          <h2>Upcoming events</h2>

          <ul
            class="list-none"
            v-for="seminar in eventStatusFilter(false)"
            v-bind:key="seminar.node.id">
            <li>
              <g-link
                class=""
                :to="seminar.node.path">{{ seminar.node.title }}</g-link>
            </li>
          </ul>

        </div>


        <div v-if="numberOfEvents(true) > 0">
          <h2>Passed events</h2>

          <ul
            class="list-none"
            v-for="seminar in eventStatusFilter(true)"
            v-bind:key="seminar.node.id">
            <li>
              <g-link
                class=""
                :to="seminar.node.path">{{ seminar.node.title }}</g-link>
            </li>
          </ul>

        </div>

      </content-panel>
    </main>
  </Layout>
</template>

<page-query>
query {
  seminars: allSeminar (sortBy: "date", order: DESC) {
    edges {
      node {
        id
        title
        event_passed
        path
      }
    }
  }
}
</page-query>


<script>
import ContentPanel from '~/components/ui/panel/Content.vue'

export default {
  metaInfo: {
    title: 'Seminars'
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

    numberOfEvents: function (status) {
      var numberOfPassedEvents = 0
      this.$page.seminars.edges.forEach(element => {
        if (element.node.event_passed === status)
        {
          numberOfPassedEvents++
        }
      });
      return numberOfPassedEvents
    },

    eventStatusFilter: function (status) {
      return this.$page.seminars.edges.filter( function (el) {
        return el.node.event_passed === status
      })
    }
  },

  components: {
    ContentPanel
  }
}
</script>

<style scoped>
</style>
