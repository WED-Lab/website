<template>
  <div>
    <panel>
      <h2 class="text-4xl text-center font-bold mb-10">Partners</h2>

      <div class="flex flex-col md:flex-row flex-wrap items-center -mx-4">

        <div class="w-4/5 md:w-1/2 lg:w-1/3 px-10 py-10">
          <a
            href="https://www.idrc.ca/"
            target="_blank">
            <g-image
              src="~/assets/images/home/partners/idrc.jpg"
              alt="" />
            <span class="sr-only">IDRC - International Development Research Centre</span>
          </a>
        </div>

        <div class="w-4/5 md:w-1/2 lg:w-1/3 px-10 py-10">
          <a
            href="http://www.hewlett.org/"
            target="_blank">
            <g-image
              src="~/assets/images/home/partners/hewlet-flora.jpg"
              alt="" />
            <span class="sr-only">Hewlett Foundation</span>
          </a>
        </div>

        <div class="w-4/5 md:w-1/2 lg:w-1/3 px-10 py-10">
          <a
            href="http://www.mcgill.ca/isid/"
            target="_blank">
            <g-image
              src="~/assets/images/home/partners/isid.jpg"
              alt="" />
            <span class="sr-only">Institute for the Study of International Development</span>
          </a>
        </div>

        <div class="w-4/5 md:w-1/2 lg:w-1/3 px-10 py-10">
          <a
            href="http://www.mcgill.ca/"
            target="_blank">
            <g-image
              src="~/assets/images/home/partners/mcgill.png"
              alt="" />
            <span class="sr-only">McGill University</span>
          </a>
        </div>

        <div class="w-4/5 md:w-full lg:w-2/3 px-10 py-10">
          <a
            href="https://www.canada.ca/en.html"
            target="_blank">
            <g-image
              src="~/assets/images/home/partners/sshrc-crsh-fip.jpg"
              alt="" />
            <span class="sr-only">Government of Canada</span>
          </a>
        </div>

      </div>

      <!--
      <div class="px-2">
        <div class="flex -mx-2">
          <div class="w-1/3 px-2">
            <div class="bg-gray-400">
              <a
                href="https://www.idrc.ca/"
                target="_blank">
                <g-image
                  src="~/assets/images/home/partners/idrc.jpg"
                  alt="" />
                <span class="sr-only">IDRC - International Development Research Centre</span>
              </a>
            </div>
          </div>
          <div class="w-1/3 px-2">
            <div class="bg-gray-500">
              <a
                href="http://www.hewlett.org/"
                target="_blank">
                <g-image
                  src="~/assets/images/home/partners/hewlet-flora.jpg"
                  alt="" />
                <span class="sr-only">Hewlett Foundation</span>
              </a>
            </div>
          </div>
          <div class="w-1/3 px-2">
            <div class="bg-gray-400">
               <a
                href="http://www.mcgill.ca/isid/"
                target="_blank">
                <g-image
                  src="~/assets/images/home/partners/isid.jpg"
                  alt="" />
                <span class="sr-only">Institute for the Study of International Development</span>
              </a>
            </div>
          </div>
          <div class="w-1/3 px-2">
            <div class="bg-gray-400">
               <a
                href="http://www.mcgill.ca/"
                target="_blank">
                <g-image
                  src="~/assets/images/home/partners/mcgill.png"
                  alt="" />
                <span class="sr-only">McGill University</span>
              </a>
            </div>
          </div>
          <div class="w-1/3 px-2">
            <div class="bg-gray-400">
               <a
                href="https://www.canada.ca/en.html"
                target="_blank">
                <g-image
                  src="~/assets/images/home/partners/sshrc-crsh-fip.jpg"
                  alt="" />
                <span class="sr-only">Government of Canada</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      -->

    </panel>
  </div>
</template>

<script>
import Panel from '~/components/ui/panel/Feature.vue'

export default {
  name: 'HomePartners',
  components: {
    Panel
  }
}
</script>
