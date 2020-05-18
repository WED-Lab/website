<template>
  <div>
    <footer>
      <div class="bg-dark-turquoise">
        <div class="w-2/3 mx-auto p-10">
          <div class="flex flex-col md:flex-row justify-between">
            <div class=" bg-gray-300">
              one
            </div>
            <div class=" bg-red-300">
              two
            </div>
          </div>
        </div>
      </div>
      <div class="bg-red-500">
        <div class="w-4/5 mx-auto py-10">
          <div class="flex flex-row items-center bg-red-100">
            <div class="bg-red-200">Hello</div>
            <div class="bg-red-300">Hello</div>
            <div class="bg-red-400">
              <p>Hello</p>
              <p>Hello</p>
              <p>Hello</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-light-gray">
        <div class="w-2/3 mx-auto p-10">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 class="sr-only">Copyright information:</h3>
              <p class="text-sm text-gray-700">Copyright © 2020 McGill University</p>
            </div>
            <div class="w-3/12">
              <h3 class="sr-only">Brand Logo:</h3>
              <g-image alt="Example image" src="~/assets/images/brand/wed-lab.png" fit="contain" quality="100" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>