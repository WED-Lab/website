<template>
  <div>
    <panel backgroundColor="bg-light-gray">
      <h2 class="text-3xl md:text-4xl text-center font-bold">Unpacking Women’s Empowerment: Implications for Research, Policy and Practice in International Development</h2>

      <div class="w-full md:w-4/5 mx-auto my-20">
        <div class="relative aspect-16x9">
          <iframe class="absolute pin w-full h-full" src="https://www.youtube.com/embed/IweYfH_Nnxo?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

        </div>
      </div>

      <p class="text-2xl text-center mt-10">What constitutes women’s empowerment and how do we evaluate policies and programmes for their impact? Watch video recordings from ISID’s 2018 annual conference <a class="text-2xl" href="https://www.youtube.com/watch?v=IKP02meAGj4&amp;list=PLCaEJ2TUv924GMa0q4clawURxB45cgsMU&amp;index=5&amp;t=191s" rel="external">'Unpacking Women’s Empowerment'</a>.</p>
    </panel>
  </div>
</template>

<script>
import Panel from '~/components/ui/panel/Feature.vue'

export default {
  name: 'HomeVideo',
  components: {
    Panel
  }
}
</script>

<style scoped>

.aspect-16x9 {
  padding-bottom: 56.25%; /* (9 / 16 = 0.5625) */
}

</style>
