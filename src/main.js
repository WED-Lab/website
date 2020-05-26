// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import global styles
require('~/assets/styles/main.css')

// Import default layout component
import DefaultLayout from '~/layouts/Default.vue'

// Set the path to the Open Graph image
var domain = 'https://womensempowerment.lab.mcgill.ca'
var ogImagePath = '/images/open-graph-data/open-graph-image.png'
var ogDescription = 'This Research-to-Practice Lab is bridging the gap between academics, practitioners and policy makers in Canada and globally on issues related to women\'s empowerment in developing countries'
var ogTitle = 'Women\'s Empowerment in Development Lab'
var ogImageAlt = 'Logo for ' + ogTitle

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // og:image - Add Open Graph Information to the head of every page
  head.meta.push({
    key: 'og:image',
    property: 'og:image',
    content: domain + ogImagePath
  })

  // og:description - Add Open Graph Information to the head of every page
  head.meta.push({
    key: 'og:description',
    property: 'og:description',
    content: ogDescription
  })

  // og:title - Add Open Graph Information to the head of every page
  head.meta.push({
    key: 'og:title',
    property: 'og:title',
    content: ogTitle
  })

  // og:imageAlt - Add Open Graph Information to the head of every page
  head.meta.push({
    key: 'og:image:alt',
    property: 'og:image:alt',
    content: ogImageAlt
  })

}
