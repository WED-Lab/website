<template>
  <div>
    <div class="bg-white">
      <header>
        <nav class="flex items-center justify-between py-6 px-10">
          <h2 class="sr-only">Site Navigation</h2>
          <!-- Brand logo -->
          <div class="w-40">
            <g-image alt="Example image" src="~/assets/images/brand/wed-lab.png" fit="contain" quality="100" />
          </div>
          <!-- Menu button when small -->

          <!-- Menu items -->
          <div class="">
            <ul class="flex items-center">
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

      <!--
      <header class="header">

        <nav class="flex items-center justify-between flex-wrap bg-light-gray p-6">

          <h2 class="sr-only"></h2>

          <div class="flex items-center flex-shrink-0 text-white mr-8">
            <div class="w-40">
              <g-image alt="Example image" src="~/assets/images/brand/wed-lab.png" fit="contain" quality="100" />
            </div>
          </div>
          <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow bg-dark-red">
              <g-link class="nav__link" to="/">Home</g-link>

              <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-8">
                Docs
              </a>
              <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-8">
                Examples
              </a>
              <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                Blog
              </a>
            </div>
            <div>
              <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
            </div>
          </div>

        </nav>

      </header>
      -->
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
  methods: {

  }
}
</script>
