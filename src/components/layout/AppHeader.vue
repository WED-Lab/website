<template>
  <div>
    <!--
    <div class="bg-white">
      <header>
        <nav class="flex items-center justify-between py-6 px-10">
          <h2 class="sr-only">Site Navigation</h2>

          <div class="flex items-center flex-shrink-0 text-white mr-8">
            <div class="w-40">
              <g-image alt="Example image" src="~/assets/images/brand/wed-lab.png" fit="contain" quality="100" />
            </div>
          </div>

          <div class="block lg:hidden">
            <button
              v-on:click="toggleMenu"
              class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>

          <div
            class="hidden absolute top-0 left-0 bg-red-100 z-50 w-full h-full block flex-grow items-end
                   md:justify-end md:flex md:h-auto md:w-auto md:relative"
            :class="menuClass">
            <input class="hidden" v-on:keyup.esc="escKeyBoardHandler">
            <ul class="flex flex-col mx-auto my-auto md:m-0 md:flex-row md:justify-end bg-red-200">
              <li>
                <g-link class="mr-8 text-gray-600 hover:text-gray-900 hover:no-underline text-lg tracking-wider font-light" to="/">Home</g-link>
              </li>
              <li>
                <g-link class="mr-8 text-gray-600 hover:text-gray-900 hover:no-underline text-lg tracking-wider font-light" to="/seminars/">Seminars</g-link>
              </li>
              <li>
                <g-link class="mr-8 text-gray-600 hover:text-gray-900 hover:no-underline text-lg tracking-wider font-light" to="/people/">People</g-link>
              </li>
              <li>
                <g-link class="mr-8 text-gray-600 hover:text-gray-900 hover:no-underline text-lg tracking-wider font-light" to="/projects/">Projects</g-link>
              </li>
              <li>
                <g-link class="mr-8 text-gray-600 hover:text-gray-900 hover:no-underline text-lg tracking-wider font-light" to="/publications/">Publications</g-link>
              </li>
              <li>
                <g-link class="text-gray-600 hover:text-gray-900 hover:no-underline text-lg tracking-wider font-light" to="/about/">About</g-link>
              </li>
            </ul>
          </div>

        </nav>
      </header>

    </div>
    -->

    <div class="bg-white">
      <header>
        <nav class="flex items-center py-6 px-10 flex-wrap">
          <a href="/" class="p-2 mr-4 inline-flex items-center w-40">
            <g-image alt="WED Lab Logo" src="~/assets/images/brand/wed-lab.png" fit="contain" quality="100" />
            <span class="sr-only"
              >WED Lab</span
            >
          </a>
           <!-- Menu button when small -->
          <div class="block lg:hidden ml-auto">
            <button
              v-on:click="toggleMenu"
              class="flex items-center px-3 py-2 border rounded focus:text-teal-200 text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <!--
          <button
            class="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
            data-target="#navigation"
          >
            <i class="material-icons">menu</i>
          </button>
          -->
          <div
            class="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
            :class="menuClass"
          >
            <div
              class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto"
            >
             <ul class="flex flex-col md:m-0 md:flex-row md:justify-end">
              <li>
                <g-link class="md:mr-8 text-gray-600 hover:text-gray-900 hover:no-underline text-lg tracking-wider font-light" to="/">Home</g-link>
              </li>
              <li>
                <g-link class="md:mr-8 text-gray-600 hover:text-gray-900 hover:no-underline text-lg tracking-wider font-light" to="/seminars/">Seminars</g-link>
              </li>
              <li>
                <g-link class="md:mr-8 text-gray-600 hover:text-gray-900 hover:no-underline text-lg tracking-wider font-light" to="/people/">People</g-link>
              </li>
              <li>
                <g-link class="md:mr-8 text-gray-600 hover:text-gray-900 hover:no-underline text-lg tracking-wider font-light" to="/projects/">Projects</g-link>
              </li>
              <li>
                <g-link class="md:mr-8 text-gray-600 hover:text-gray-900 hover:no-underline text-lg tracking-wider font-light" to="/publications/">Publications</g-link>
              </li>
              <li>
                <g-link class="text-gray-600 hover:text-gray-900 hover:no-underline text-lg tracking-wider font-light" to="/about/">About</g-link>
              </li>
            </ul>

            <!--
              <a
                href="#"
                class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
              >
                <span>Home</span>
              </a>
              <a
                href="#"
                class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
              >
                <span>About</span>
              </a>
              <a
                href="#"
                class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
              >
                <span>Services</span>
              </a>
              <a
                href="#"
                class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
              >
                <span>Gallery</span>
              </a>
              <a
                href="#"
                class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
              >
                <span>Products</span>
              </a>
              <a
                href="#"
                class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
              >
                <span>Contact Us</span>
              </a>-->
            </div>
          </div>
        </nav>
      </header>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>


<script>
export default {
  name: 'Header',

  data: function () {
    return {
      menuOpen : false
    }
  },

  computed: {

    menuClass: function() {
      return this.menuOpen ? 'open' : ''
    }

  },

  methods: {

    toggleMenu: function() {
      this.menuOpen = !this.menuOpen
      console.log('hello')
    },

    escKeyBoardHandler: function() {
      console.log('escape key hit')
      if (this.menuOpen === true)
      {
        this.toggleMenu
      }
    }

  }
}
</script>

<style scoped>
.open {
  display: inline-flex !important;
}

</style>
