<template>
  <div>
    <footer>
      <h2 class="sr-only">Footer Information</h2>
      <panel backgroundColor="bg-dark-turquoise" paddingVertical="py-10">
        <div class="flex flex-col md:flex-row md:items-start md:justify-between">
          <nav class="mb-10 md:w-1/2 lg:2/3">
            <h3 class="sr-only">Site menu links</h3>
            <ul class="flex flex-col">
              <li v-for="menuLink in menuLinks" :key="menuLink.text">
                <g-link
                  class="py-2 w-full block text-white hover:underline text-lg tracking-wider font-semibold"
                  :to="menuLink.path">{{ menuLink.text }}</g-link>
              </li>
            </ul>
          </nav>
          <div class="border-t border-white md:border-none md:w-1/2 lg:1/3">
            <h3 class="sr-only">Contact information</h3>
            <ul class="list-none">
              <li>
                <div class="mt-10 md:mt-0 flex items-start">
                  <svg class="h-12 w-12 fill-current text-blue inline-block" viewBox="0 0 20 20">
                    <path fill="#fff" d="M10.292,4.229c-1.487,0-2.691,1.205-2.691,2.691s1.205,2.691,2.691,2.691s2.69-1.205,2.69-2.691
                      S11.779,4.229,10.292,4.229z M10.292,8.535c-0.892,0-1.615-0.723-1.615-1.615S9.4,5.306,10.292,5.306
                      c0.891,0,1.614,0.722,1.614,1.614S11.184,8.535,10.292,8.535z M10.292,1C6.725,1,3.834,3.892,3.834,7.458
                      c0,3.567,6.458,10.764,6.458,10.764s6.458-7.196,6.458-10.764C16.75,3.892,13.859,1,10.292,1z M4.91,7.525
                      c0-3.009,2.41-5.449,5.382-5.449c2.971,0,5.381,2.44,5.381,5.449s-5.381,9.082-5.381,9.082S4.91,10.535,4.91,7.525z"></path>
                  </svg>
                  <h4 class="sr-only">Physical address</h4>
                  <address class="ml-2 w-2/3 tracking-wider text-white not-italic">
                    Institute for the Study of International Development<br />
                    Peterson Hall<br >
                    3460 McTavish Street<br />
                    Montréal, Québec, H3A&nbsp;0E6
                  </address>
                </div>
              </li>
              <li>
                <div class="mt-10 flex items-start">
                  <svg class="h-12 w-12 fill-current text-blue inline-block" viewBox="0 0 20 20">
                    <path fill="#fff" d="M12.871,9.337H7.377c-0.304,0-0.549,0.246-0.549,0.549c0,0.303,0.246,0.55,0.549,0.55h5.494
                      c0.305,0,0.551-0.247,0.551-0.55C13.422,9.583,13.176,9.337,12.871,9.337z M15.07,6.04H5.179c-0.304,0-0.549,0.246-0.549,0.55
                      c0,0.303,0.246,0.549,0.549,0.549h9.891c0.303,0,0.549-0.247,0.549-0.549C15.619,6.286,15.373,6.04,15.07,6.04z M17.268,1.645
                      H2.981c-0.911,0-1.648,0.738-1.648,1.648v10.988c0,0.912,0.738,1.648,1.648,1.648h4.938l2.205,2.205l2.206-2.205h4.938
                      c0.91,0,1.648-0.736,1.648-1.648V3.293C18.916,2.382,18.178,1.645,17.268,1.645z M17.816,13.732c0,0.607-0.492,1.1-1.098,1.1
                      h-4.939l-1.655,1.654l-1.656-1.654H3.531c-0.607,0-1.099-0.492-1.099-1.1v-9.89c0-0.607,0.492-1.099,1.099-1.099h13.188
                      c0.605,0,1.098,0.492,1.098,1.099V13.732z"></path>
                  </svg>
                  <h4 class="sr-only">Email address</h4>
                  <a class="ml-2 w-1/3 text-white text-lg hover:underline" href="mailto:wedlab.isid@mcgill.ca">wedlab.isid@mcgill.ca</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </panel>
      <panel backgroundColor="bg-white" paddingVertical="py-10">
        <div class="flex flex-col items-center md:flex-row md:justify-between">
          <div class="order-2 mt-10 md:mt-0">
            <h3 class="sr-only">Copyright information:</h3>
            <p class="text-center md:text-right text-sm text-gray-700 pb-0 mb-0">Copyright © 2020 McGill University</p>
          </div>
          <div class="order-1 w-40">
            <h3 class="sr-only">Brand Logo:</h3>
            <g-image alt="Example image" src="~/assets/images/brand/wed-lab.png" fit="contain" quality="100" />
          </div>
        </div>
      </panel>
    </footer>
  </div>
</template>

<script>
import Panel from '~/components/ui/panel/Feature.vue'
// import ContentPanel from '~/components/ui/panel/Content.vue'

export default {
  name: 'Footer',

  data: function () {
    return {
      menuLinks: [
        {
          text: 'Home',
          path: '/'
        },
        {
          text: 'Seminars',
          path: '/seminars/'
        },
        {
          text: 'Resources',
          path: '/resources/'
        },
        {
          text: 'People',
          path: '/people/'
        },
        {
          text: 'Projects',
          path: '/projects/'
        },
        {
          text: 'Publications',
          path: '/publications/'
        },
        {
          text: 'About',
          path: '/about/'
        }
      ]
    }
  },

  components: {

    Panel

  }
}
</script>
