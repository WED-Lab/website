<template>
  <div :class="outerClasses">
    <div class="mx-auto" :class="innerClasses">
      <slot />
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
      default: 'w-5/6'
    },

    paddingVertical: {
      type: String,
      required: false,
      default: 'py-40'
    },

    paddingHorizontal: {
      type: String,
      required: false,
      default: 'px-10'
    },


  }
}
</script>
