<template>
  <Layout>
    <main>
      <hero />
      <seminars />
      <latest-works />
      <research-projects />
      <promotional-video />
      <partners />
    </main>
  </Layout>
</template>

<script>
import Hero from '~/components/home/Hero.vue'
import Seminars from '~/components/home/Seminars.vue'
import LatestWorks from '~/components/home/LatestWorks.vue'
import ResearchProjects from '~/components/home/ResearchProjects.vue'
import PromotionalVideo from '~/components/home/Video.vue'
import Partners from '~/components/home/Partners.vue'

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    Hero,
    Seminars,
    LatestWorks,
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
