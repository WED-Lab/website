<template>
  <layout>
    <main>
      <content-panel>
        <h1>{{ $page.project.title }}</h1>

        <div class="flex flex-row justify-between border-b border-gray-400">
          <p class="text-lg text-gray-600 mb-5">{{ $page.project.author }}</p>
          <p class="border border-gray-300 bg-white px-3 rounded-lg mb-5 text-base"><span class="sr-only">Project status: </span>{{ $page.project.project_status }}</p>
        </div>

        <div class="mt-5 markdown-body">
          <VueRemarkContent />
        </div>
      </content-panel>
    </main>
  </layout>
</template>

<page-query>
query Project ($id: ID!) {
  project(id: $id) {
    title
    author
    project_status
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
