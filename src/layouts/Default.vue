<template>
  <div>
    <the-skip-nav />
    <the-header />
    <the-breadcrumbs />
    <slot/>
    <the-footer />
  </div>
</template>

<script>
import theSkipNav from '~/components/TheSkipNav.vue'
import theHeader from '~/components/TheHeader.vue'
import theBreadcrumbs from '~/components/TheBreadcrumbs.vue'
import theFooter from '~/components/TheFooter.vue'

export default {
  components: {
    theSkipNav,
    theHeader,
    theBreadcrumbs,
    theFooter
  }
}
</script>

<style>
</style>
