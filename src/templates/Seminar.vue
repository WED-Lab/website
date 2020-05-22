<template>
  <layout>
    <main>
      <content-panel>
        <h1 class="text-4xl font-bold leading-tight">{{ $page.seminar.title }}</h1>

        <div class="mt-5 markdown-body">
          <VueRemarkContent />
        </div>

      </content-panel>
    </main>
  </layout>
</template>

<page-query>
query Seminar ($id: ID!) {
  seminar(id: $id) {
    title
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
