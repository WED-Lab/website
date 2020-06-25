<template>
  <Layout>
    <main>
      <hero />
      <seminars />
      <research-projects />
      <publications />
      <about />
      <promotional-video />
      <partners />
    </main>
  </Layout>
</template>

<script>
import Hero from '~/components/home/Hero.vue'
import About from '~/components/home/About.vue'
import Seminars from '~/components/home/Seminars.vue'
import Publications from '~/components/home/Publications.vue'
import ResearchProjects from '~/components/home/ResearchProjects.vue'
import PromotionalVideo from '~/components/home/Video.vue'
import Partners from '~/components/home/Partners.vue'

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    Hero,
    About,
    Seminars,
    Publications,
    ResearchProjects,
    PromotionalVideo,
    Partners
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
