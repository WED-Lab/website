<template>
  <div>
    <panel>
      <h2 class="text-5xl text-center text-dark-turquoise font-extrabold">Research Projects</h2>

      <div class="flex flex-row flex-wrap">
        <div class="w-1/2 bg-red-100 my-4 p-10">Hello</div>
        <div class="w-1/2 bg-red-100 my-4 p-10">Hello</div>
        <div class="w-1/2 bg-red-100 my-4 p-10">Hello</div>
        <div class="w-1/2 bg-red-100 my-4 p-10">Hello</div>
      </div>
    </panel>
  </div>
</template>

<script>
import Panel from '~/components/ui/panel/Feature.vue'

export default {
  name: 'HomeResearchProjects',
  components: {
    Panel
  }
}
</script>
