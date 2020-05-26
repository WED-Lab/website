<template>
  <div :class="backgroundColor">
    <div class="container">
      <div class="mx-auto" :class="outerClasses">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPanel',

  data: function () {
    return {
    }
  },

  computed: {

    outerClasses: function () {
      return this.width + ' ' +
             this.paddingVertical + ' ' +
             this.paddingHorizontal
    }

  },

  props: {

    backgroundColor: {
      type: String,
      required: false,
      default: 'bg-light-gray'
    },

    width: {
      type: String,
      required: false,
      default: 'w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12'
    },

    paddingVertical: {
      type: String,
      required: false,
      default: 'py-10 md:py-20'
    },

    paddingHorizontal: {
      type: String,
      required: false,
      default: 'px-6 md:px-10'
    },

  }
}
</script>
