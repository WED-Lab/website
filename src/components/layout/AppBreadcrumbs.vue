<template>
  <content-panel
    backgroundColor="bg-dark-turquoise"
    paddingVertical="py-1">
    <h2 class="sr-only">Site Breadcrumbs - not implemented</h2>
    <!--
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li>
          <g-link class="text-white" to="/">Home</g-link>
        </li>
      </ol>
    </nav>
    -->
  </content-panel>
</template>

<script>
import ContentPanel from '~/components/ui/panel/Content.vue'

export default {
  name: 'Breadcrumbs',

  components: {
    ContentPanel
  }
}
</script>
