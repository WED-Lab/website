<template>
  <div>
    <panel backgroundColor="bg-red-400">
      <div class=" w-full bg-dark-red">
        <h2>Hero</h2>
      </div>
    </panel>
  </div>
</template>

<script>
import Panel from '~/components/ui/panel/Feature.vue'

export default {
  name: 'HomeHero',
  components: {
    Panel
  }
}
</script>
