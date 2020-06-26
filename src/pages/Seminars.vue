<template>
  <Layout>
    <main>
      <content-panel>

        <h1 id="maincontent">Seminars</h1>

        <p>The WED Lab, in partnership with Canada's International Development Research Centre and funding from Social Sciences and Humanities Research Council hosted a series of seven research-to-practice training seminars in 2019 for students, scholars, practitioners and policymakers on state of the art research in core areas of women’s empowerment in development.

        <p>Click on a topic to access a recording of the seminar, the facilitator’s PowerPoint slides, suggested readings and other related materials.</p>

        <div v-for="topic in series" v-bind:key="topic.id">

          <!-- Topic -->
          <h2 class="mt-20">{{ topic.title }}</h2>

          <!-- Loop through the two different status (upcoming and past) -->
          <div v-for="status in statuses" v-bind:key="status.id">

            <div v-if="numberOfEvents(topic.id, status.id) > 0">

              <h3 class="sr-only">{{ status.heading }}</h3>

              <ul
                class="list-none"
                v-for="seminar in eventFilter(topic.id, status.id)"
                v-bind:key="seminar.node.id">
                <li class="flex flex-col w-full my-4 mb-10 p-8 bg-white rounded-lg hover:shadow-xl transition-all duration-300 ease-in">

                  <h4 class="order-2 font-bold text-lg">{{ seminar.node.title }}</h4>

                  <p class="order-1 mt-0 mb-2 py-0 text-xs text-gray-500">{{ dateFormat(seminar.node.date) }}</p>

                  <div class="order-3 mt-4">

                    <a :href="seminar.node.registration_link"
                      class="btn btn-link mr-10"
                      v-if="seminar.node.event_passed === false">
                      Register</a>


                    <g-link
                    class="order-4 btn btn-link"
                    :to="seminar.node.path">Learn more</g-link>

                  </div>

                </li>
              </ul>

            </div>

          </div>

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
        series
        date
        registration_link
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
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      series: [
        {
          'id': 'covid',
          'title': 'WED Lab - Special COVID-19 Webinar Series'
        },
        {
          'id': 'training',
          'title': 'Women’s empowerment in development research-to-practice training seminars'
        },
      ],
      statuses: [
        {
          'id': 'upcoming',
          'heading': 'Upcoming'
        },
        {
          'id': 'past',
          'heading': 'Past events'
        }
      ]
    }
  },

  methods: {

    numberOfEvents: function (seriesId, statusId) {
      var numberOfEvents = 0, statusFlag;

      this.$page.seminars.edges.forEach(element => {
        if (element.node.series === seriesId && element.node.event_passed === (statusId === 'upcoming' ?  false : true))
        {
          numberOfEvents++;
        }
      });

      return numberOfEvents;
    },

    eventFilter: function (seriesId, statusId) {
      return this.$page.seminars.edges.filter( function (el) {
        return (el.node.series === seriesId && el.node.event_passed === (statusId === 'upcoming' ?  false : true))
      })
    },

    dateFormat: function (dateString) {
      var date = new Date(dateString);
      // Adjust for the local system timezone
      date.setTime( date.getTime() + new Date().getTimezoneOffset()*60*1000 );
      return (date.getDate() + ' ' + this.months[date.getMonth()] + ', ' + date.getFullYear() );
    }
  },

  components: {
    ContentPanel
  }
}
</script>

<style scoped>
</style>
