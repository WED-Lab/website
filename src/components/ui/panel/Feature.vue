<template>
  <div :class="backgroundColor">
    <div :class="outerClasses">
      <div class="mx-auto" :class="innerClasses">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Panel',

  data: function () {
    return {
    }
  },

  computed: {

    outerClasses: function () {
      return ( this.isFluid ? '' : 'container' ) + ' ' +
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
      default: 'w-full sm:w-5/6'
    },

    paddingVertical: {
      type: String,
      required: false,
      default: 'py-24'
    },

    paddingHorizontal: {
      type: String,
      required: false,
      default: 'px-6 md:px-10'
    },

    isFluid: {
      type: Boolean,
      required: false,
      default: false
    }


  }
}
</script>
