<template>
  <div class="bg-white rounded-lg p-5 my-8">

    <div
      class="flex flex-row justify-between align-middle"
      >
      <h2
        class="my-0 text-lg cursor-pointer flex-1"
        v-on:click="toggleAccordion"
        >
          {{ title }}
      </h2>
      <button

        v-on:click="toggleAccordion">
        <span class="sr-only">Open and close the accordion</span>
        <svg
          v-if="isOpen"
          class="h-6 text-gray-700 fill-current" viewBox="0 0 20 20">
          <path d="M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z M13.388,9.624H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h6.775c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z"></path>
        </svg>
        <svg
          v-else
          class="h-6 text-gray-700 fill-current" viewBox="0 0 20 20">
          <path d="M13.388,9.624h-3.011v-3.01c0-0.208-0.168-0.377-0.376-0.377S9.624,6.405,9.624,6.613v3.01H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h3.011v3.01c0,0.208,0.168,0.378,0.376,0.378s0.376-0.17,0.376-0.378v-3.01h3.011c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z"></path>
        </svg>
      </button>
    </div>

    <transition name="slide">
      <div v-show="isOpen">
        <div class="mt-5 markdown-body">
          <div v-html="content" />
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
export default {

  data: function () {
    return {
      isOpen: false,
    }
  },

  computed: {

    accordionClass: function () {
      return this.isOpen ? 'h-auto' : 'h-0';
    }
  },

  props: {

    title : {
      type: String,
      required: true,
      // Object or array defaults must be returned from
      // a factory function
      default: function () {
        return {
          title: 'Missing Title'
        }
      }
    },

    id : {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    }

  },

  methods: {

    toggleAccordion: function() {
      this.isOpen = !this.isOpen;
    }

  },

  components: {
  }

}
</script>

<style scoped>
.slide-enter-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: ease-in;
   -webkit-transition-timing-function: ease-in;
   -o-transition-timing-function: ease-in;
   transition-timing-function: ease-in;
}

.slide-leave-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
   max-height: 100px;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0;
}
</style>
