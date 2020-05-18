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
import theSkipNav from '~/components/layout/AppSkipNav.vue'
import theHeader from '~/components/layout/AppHeader.vue'
import theBreadcrumbs from '~/components/layout/AppBreadcrumbs.vue'
import theFooter from '~/components/layout/AppFooter.vue'

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
