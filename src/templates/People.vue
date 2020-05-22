<template>
  <layout>
    <main>
      <content-panel>
        <h1 class="text-4xl font-bold leading-tight">{{ $page.people.title }}</h1>

        <div class="markdown-body">
          <VueRemarkContent />
        </div>
        <div v-if="$page.people.readMore !== ''">
          <a
            class="text-white bg-dark-turquoise rounded-lg p-2 font-bold hover:no-underline hover:bg-light-turquoise"
            rel="external"
            :href="$page.people.readMore">Read more <span class="sr-only">about {{ $page.people.title }}</span></a>
        </div>
      </content-panel>
    </main>
  </layout>
</template>

<page-query>
query People ($id: ID!) {
  people(id: $id) {
    title,
    firstName,
    lastName,
    readMore
  }
}
</page-query>

<script>
import ContentPanel from '~/components/ui/panel/Content.vue'

export default {

  components: {
    ContentPanel
  }

}
</script>
