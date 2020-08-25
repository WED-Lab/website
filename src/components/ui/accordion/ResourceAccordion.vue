<template>
  <div class="bg-white rounded-lg p-5 my-10">

    <h2
      class="my-0"
      v-on:click="toggleAccordion">
        {{ category }}
    </h2>

    <transition name="bounce">
      <div v-show="isOpen">
        <ul class="list-disc ml-5">
          <li
            v-for="resource in resources"
            v-bind:key="resource.id">
            <a
              :href="resource.href"
              target="_blank"
              rel="external">
                {{ resource.title }}
            </a>
          </li>
        </ul>
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

    category : {
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

    resources : {
      type: Array,
      required: true,
      // Object or array defaults must be returned from
      // a factory function
      // default: function () {
      //  return {
      //    title: 'Missing Title'
      //  }
      // }
    },
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
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
