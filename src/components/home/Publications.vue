<template>
  <div class="bg-light-gray">
    <div class="w-full mx-auto container py-16 md:py-32 px-5 md:px-5 flex flex-col lg:flex-row items-start border-t-2">

      <div class="w-full lg:w-1/2 lg:pr-16">

        <h2 class="text-3xl font-bold text-gray-700">Featured Publications</h2>

        <p class="mt-10 mb-16 text-xl text-gray-600">Selected publication produced by WED Lab members are listed on this page. Publications include journal articles, books and book chapters, media coverage, and policy briefs.</p>

        <g-link
          class="btn btn-dark-turquoise"
          to="/publications/">View all publications</g-link>
      </div>

      <div class="w-full lg:w-1/2 mt-16 lg:mt-0">

        <h3 class="sr-only">Three Featured Projects</h3>

        <div class="flex flex-col">

          <div class="w-full my-4 flex hover:shadow-xl transition-all duration-300 ease-in">

            <div class="w-full p-10 bg-white rounded-lg">

              <h4 class="font-bold text-lg">Can Subsidized Early Child Care Promote Women’s Employment? Evidence from Kenya</h4>

              <p class="text-gray-600 mt-5">Shelley Clark, Caroline Kabiru, Sonia Laszlo and Stella Muthuri</p>

              <a
                href="http://grow.research.mcgill.ca/publications/policy-briefs/gpb-2017-01.pdf"
                rel="external"
                target="_blank"
                class="font-bold">
                View the publication
              </a>

            </div>

          </div>

          <div class="w-full my-4 flex hover:shadow-xl transition-all duration-300 ease-in">

            <div class="w-full p-10 bg-white rounded-lg">

              <h4 class="font-bold text-lg">Natural Resource Collection and Desired Family Size: A Longitudinal Test of Environment-Population Theories</h4>

              <p class="text-gray-600 mt-5">Sarah Brauner-Otto and William G. Axinn</p>

              <a
                href="https://link.springer.com/article/10.1007/s11111-016-0267-6"
                rel="external"
                target="_blank"
                class="font-bold">
                View the publication
              </a>

            </div>

          </div>

          <div class="w-full my-4 flex hover:shadow-xl transition-all duration-300 ease-in">

            <div class="w-full p-10 bg-white rounded-lg">

              <h4 class="font-bold text-lg">Bridging the Gap for Women in Science and Technology</h4>

              <p class="text-gray-600 mt-5">Eliane Ubalijoro</p>

              <a
                href="http://gg2018.nef.org/bridging-the-gap-for-women-in-science-and-technology/"
                rel="external"
                target="_blank"
                class="font-bold">
                View the publication
              </a>

            </div>

          </div>

        </div>

      </div>

    </div>
  </div>
 <!--
        <div class="w-full md:w-1/3 mx-4 flex flex-col w-full rounded-lg shadow-xs md:shadow-md bg-white my-8 p-4 pb-10 border border-solid border-gray-200 bg-white">
          <h3 class="text-gray-800 text-lg font-bold mt-1 mb-0"></h3>
          <p></p>
          <div>
            <a
              class="text-white bg-dark-turquoise rounded-lg p-2 font-bold hover:no-underline hover:bg-light-turquoise"
              href=""
              >Read more</a>
          </div>
        </div>
        -->
</template>

<script>

export default {
  name: 'HomePublications',
  components: {
  }
}
</script>
