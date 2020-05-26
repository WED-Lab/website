<template>
  <div>
    <panel>
      <h2 class="text-5xl text-center text-dark-turquoise font-extrabold">Research Projects</h2>

      <div class="px-2">
        <div class="flex flex-col md:flex-row flex-wrap -mx-2">
          <div class="w-full md:w-1/2 px-2 my-4">
            <div class="gg-lab-home-project-feature">
              <g-link
                class=""
                to="/projects/">
                <g-image
                  class="gg-lab-home-project-feature-img rounded"
                  src="~/assets/images/home/research-projects/project-03.jpg"
                  alt="" />
                  <div class="gg-lab-home-project-feature-text">Cash Transfers, Fertility and Women's Empowerment</div>
              </g-link>
            </div>
          </div>
          <div class="w-full md:w-1/2 px-2 my-4">
            <div class="gg-lab-home-project-feature">
              <g-link
                class=""
                to="/projects/">
                <g-image
                  class="gg-lab-home-project-feature-img rounded"
                   src="~/assets/images/home/research-projects/project-06.jpg"
                  alt="" />
                  <div class="gg-lab-home-project-feature-text">Cash Transfers, Fertility and Women's Empowerment</div>
              </g-link>
            </div>
          </div>
          <div class="w-full md:w-1/2 px-2 my-4">
            <div class="gg-lab-home-project-feature">
              <g-link
                class=""
                to="/projects/">
                <g-image
                  class="gg-lab-home-project-feature-img rounded"
                   src="~/assets/images/home/research-projects/project-05.jpg"
                  alt="" />
                  <div class="gg-lab-home-project-feature-text">Cash Transfers, Fertility and Women's Empowerment</div>
              </g-link>
            </div>
          </div>
          <div class="w-full md:w-1/2 px-2 my-4">
            <div class="gg-lab-home-project-feature">
              <g-link
                class=""
                to="/projects/">
                <g-image
                  class="gg-lab-home-project-feature-img rounded"
                   src="~/assets/images/home/research-projects/project-07.jpg"
                  alt="" />
                  <div class="gg-lab-home-project-feature-text">Cash Transfers, Fertility and Women's Empowerment</div>
              </g-link>
            </div>
          </div>
        </div>
      </div>

    </panel>
  </div>
</template>

<script>
import Panel from '~/components/ui/panel/Feature.vue'

export default {
  name: 'HomeResearchProjects',
  components: {
    Panel
  }
}
</script>

<style scoped>
/* ==========================================================================
   Global Governance Lab Home Page Styles
   Borrowing from GG site - REFACTOR
   ========================================================================== */

.gg-lab-home-project-feature {
    position: relative;
    width: 100%;
}

.gg-lab-home-project-feature .gg-lab-home-project-feature-img {
    display: block;
    width: 100%;
    height: auto;
    filter: brightness(70%);
}

.gg-lab-home-project-feature .gg-lab-home-project-feature-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    font-weight: 700;
    font-size:2.1rem;
    line-height: 1.1;
    color: #ffffff;
    padding: 40px;
    text-align: center;
}

/* Small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) {

    .gg-lab-home-project-feature .gg-lab-home-project-feature-text {
        font-size:1.1rem;
        padding: 0px;
    }

}
</style>
