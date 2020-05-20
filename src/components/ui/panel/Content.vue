<template>
  <div :class="outerClasses">
    <div class="mx-auto" :class="innerClasses">
      <slot />
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
      return this.backgroundColor + ' ' +
             this.paddingVertical + ' ' +
             this.paddingHorizontal
    },


    innerClasses: function () {
      return this.width
    }

  },

  props: {

    backgroundColor: {
      type: String,
      required: false,
      default: 'bg-white'
    },

    width: {
      type: String,
      required: false,
      default: 'w-full sm:w-11/12 md:w-7/12 lg:w-2/3 xl:w-1/2'
    },

    paddingVertical: {
      type: String,
      required: false,
      default: 'md:py-20'
    },

    paddingHorizontal: {
      type: String,
      required: false,
      default: 'px-5 md:px-10'
    },

  }
}
</script>
