<template>
  <div>
    <panel backgroundColor="bg-light-gray">
      <div class="text-center">
        <h2 class="mt-0 text-5xl">Latest Works</h2>
      </div>

      <div class="flex flex-col md:flex-row -mx-4">
        <div class="w-full md:w-1/3 mx-4 flex flex-col w-full rounded-lg shadow-xs md:shadow-md bg-white my-8 p-4 pb-10 border border-solid border-gray-200 bg-white">
          <h3 class="text-gray-800 text-lg font-bold mt-1 mb-0">Can Subsidized Early Child Care Promote Women’s Employment? Evidence from Kenya</h3>
          <p>Shelley Clark, Caroline Kabiru, Sonia Laszlo and Stella Muthuri</p>
          <div>
            <a
              class="text-white bg-dark-turquoise rounded-lg p-2 font-bold hover:no-underline hover:bg-light-turquoise"
              href="http://grow.research.mcgill.ca/publications/policy-briefs/gpb-2017-01.pdf"
              >Read more</a>
          </div>
        </div>
        <div class="w-full md:w-1/3 mx-4 flex flex-col w-full rounded-lg shadow-xs md:shadow-md bg-white my-8 p-4 pb-10 border border-solid border-gray-200 bg-white">
          <h3 class="text-gray-800 text-lg font-bold mt-1 mb-0">Natural Resource Collection and Desired Family Size: A Longitudinal Test of Environment-Population Theories</h3>
          <p>Sarah Brauner-Otto and William G. Axinn</p>
          <div>
            <a
              class="text-white bg-dark-turquoise rounded-lg p-2 font-bold hover:no-underline hover:bg-light-turquoise"
              href="https://link.springer.com/article/10.1007/s11111-016-0267-6"
              >Read more</a>
          </div>
        </div>
        <div class="w-full md:w-1/3 mx-4 flex flex-col w-full rounded-lg shadow-xs md:shadow-md bg-white my-8 p-4 pb-10 border border-solid border-gray-200 bg-white">
          <h3 class="text-gray-800 text-lg font-bold mt-1 mb-0">Bridging the Gap for Women in Science and Technology</h3>
          <p>Eliane Ubalijoro</p>
          <div>
            <a
              class="text-white bg-dark-turquoise rounded-lg p-2 font-bold hover:no-underline hover:bg-light-turquoise"
              href="http://gg2018.nef.org/bridging-the-gap-for-women-in-science-and-technology/"
              >Read more</a>
          </div>
        </div>
      </div>

    </panel>
  </div>
</template>

<script>
import Panel from '~/components/ui/panel/Feature.vue'

export default {
  name: 'HomeLatestWorks',
  components: {
    Panel
  }
}
</script>
