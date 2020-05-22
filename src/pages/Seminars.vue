<template>
  <Layout>
    <main>
      <content-panel>

        <h1 class="mb-5 text-5xl text-dark-turquoise font-extrabold">Seminars</h1>

        <p>The WED Lab, in partnership with Canada's International Development Research Centre and funding from Social Sciences and Humanities Research Council hosted a series of seven research-to-practice training seminars in 2019 for students, scholars, practitioners and policymakers on state of the art research in core areas of women’s empowerment in development.

        <p>Click on a topic to access a recording of the seminar, the facilitator’s PowerPoint slides, suggested readings and other related materials.</p>

        <div v-if="numberOfEvents(false) > 0">
          <h2>New WED Lab Webinar Series on Gender and COVID-19</h2>

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
          <h2>Past events</h2>

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
