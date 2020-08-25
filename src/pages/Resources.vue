<template>
  <Layout>
    <main>
      <content-panel>

        <h1 name="maincontent" id="maincontent">COVID-19 Resources</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac turpis dignissim, dapibus enim ut, bibendum mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus mattis velit nec ante malesuada, quis iaculis quam rhoncus. Duis nibh elit, tincidunt nec diam a, sodales condimentum nibh. Integer vitae dui sed arcu interdum dapibus. Quisque placerat, odio eu finibus faucibus, libero erat vulputate metus, ut congue turpis nunc iaculis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin accumsan ante id arcu venenatis mollis. </p>

        <!-- Loop through all of the categories creating an accordion for each category -->

        <div
          v-for="category in categories"
          v-bind:key="category.id">
          <section>

            <accordion
              v-bind:category="category"
              v-bind:resources="correctCategoryFilter(category)"
            />

          </section>
        </div>

      </content-panel>
    </main>
  </Layout>
</template>

<page-query>
query {
  resources: allResources {
    edges {
      node {
        data {
          title,
          href,
          category,
        }
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

  created() {
    console.log('Resources component created', this.categories )

    // create an array of all the unique categories
    this.categories = this.$page.resources.edges[0].node.data.map(item => item.category)
      .filter((value, index, self) => self.indexOf(value) === index)

  },

  methods: {

    correctCategoryFilter: function (category) {
      return this.$page.resources.edges[0].node.data.filter( function (el) {
        return el.category === category;
      })
    }

  },


  components: {
    ContentPanel,
    Accordion
  }
}
</script>

<style scoped>
</style>
