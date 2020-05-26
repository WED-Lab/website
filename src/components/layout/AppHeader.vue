<template>
  <div
    v-on:keyup.esc="escKeyHandler"
    class="bg-white shadow-sm border-b" >
    <div class="container w-full mx-auto ">
      <div class="flex flex-row justify-between items-center px-10 pt-6 pb-5
                  lg:py-2">

        <!-- Logo -->
        <div>
          <g-link
            to="/"
            class="inline-flex items-center justify-center w-32" >
            <g-image alt="WED Lab Logo" src="~/assets/images/brand/wed-lab.png" fit="contain" quality="100" />
            <span class="sr-only"
              >WED Lab</span>
          </g-link>
        </div>

        <!-- Menu button when small -->
        <div class="block lg:hidden ml-auto">
          <button
            ref="menuCloseButton"
            v-on:click="showMenu"
            class="flex items-center px-3 py-3 bg-white border border-8 border-dark-turquoise text-dark-turquoise rounded-full shadow-md
                   focus:text-dark-turquoise
                   hover:text-light-turquoise hover:border-light-turquoise hover:shadow-lg">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>

        <!-- Menu Container -->
        <div
          class="hidden w-screen h-screen bg-light-gray absolute top-0 left-0 flex-col items-stretch justify-start px-10
                 lg:flex lg:flex-row lg:w-auto lg:h-auto lg:bg-transparent lg:relative lg:justify-end lg:items-end lg:px-0"
          :class="{'open': isMenuVisible}">

          <!-- Logo for the mobile modal window -->
          <div
            v-if="isMenuVisible"
            v-on:keydown.shift.tab.exact="shiftTabKeyHandler"
            ref="menuLogoLink">
            <g-link
              to="/"
              class="pt-5 inline-flex items-center justify-center w-40 lg:hidden" >
              <g-image immediate="true" alt="WED Lab Logo" src="~/assets/images/brand/wed-lab.png" fit="contain" quality="100" />
              <span class="sr-only"
                >WED Lab</span>
            </g-link>
          </div>

          <!-- Links -->
          <div class="">
            <ul class="flex flex-col my-10
                       lg:flex-row"
              ref="menuList">
              <li v-for="menuLink in menuLinks" :key="menuLink.text">
                <g-link
                  class="text-3xl text-gray-800 font-bold antialiased
                         lg:text-lg lg:text-gray-700 lg:mr-5"
                  exact-active-class="underline pointer-events-none md:pointer-events-auto text-dark-red lg:text-dark-red"
                  :to="menuLink.path">{{ menuLink.text }}</g-link>
              </li>
            </ul>
          </div>

          <!-- Close button -->
          <div v-if="isMenuVisible">
            <button
              ref="menuCloseButton"
              v-on:keydown.tab.exact="tabKeyHandler"
              v-on:click="hideMenu"
              class="w-full text-white bg-dark-turquoise rounded-lg p-2 font-bold hover:no-underline hover:bg-light-turquoise lg:hidden">
              Close menu</button>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader2',

  data: function () {
    return {
      isMenuVisible: false,
      menuLinks: [
        {
          text: 'Home',
          path: '/'
        },
        {
          text: 'Seminars',
          path: '/seminars/'
        },
        {
          text: 'People',
          path: '/people/'
        },
        {
          text: 'Projects',
          path: '/projects/'
        },
        {
          text: 'Publications',
          path: '/publications/'
        },
        {
          text: 'About',
          path: '/about/'
        }
      ]
    }
  },

  methods: {

    // Main toggle function to flip the menu open and closed
    // and handle any other logic when the menu flips
    showMenu: function () {

      this.isMenuVisible = true

      // Add a class so that the body won't scrool (doesn't work in Safari - but does in other browsers)
      document.body.classList.add('no-scroll')

      // Set focus after a delay to allow for the annimation
      this.$nextTick(function(){
        this.$refs.menuList.firstElementChild.firstElementChild.focus()
      })

      console.log("Mobile Menu: Open");
    },

    // Main toggle function to flip the menu open and closed
    // and handle any other logic when the menu flips
    hideMenu: function () {

      this.isMenuVisible = false

      // Remvoe the no-scroll class
      document.body.classList.remove('no-scroll')

      // Set the focus to the open menu button
      this.$refs.menuCloseButton.focus()

      console.log("Mobile Menu: Close");

    },

    // Handle the escape key being hit when the menu is open
    escKeyHandler: function () {
      if (this.isMenuVisible === true) {
        this.hideMenu()
      }
    },

    // Handle the tab key being hit when the menu is open
    tabKeyHandler: function () {
      console.log('tab key hit',this.$refs.menuLogoLink.firstElementChild)

      if (this.isMenuVisible === true) {
        // Set focus to the first selectable item
        this.$refs.menuLogoLink.firstChild.focus()
      }
    },

    // Handle the tab key being hit when the menu is open
    shiftTabKeyHandler: function () {
      console.log('shift tab key hit')
      if (this.isMenuVisible === true) {
        this.$refs.menuCloseButton.focus()
      }
    }
  },

  beforeDestroy: function () {
    // Perform the teardown procedure for someLeakyProperty.
    // (In this case, effectively nothing)
    this.hideMenu()
  }
}
</script>

<style scoped>
.open {
  display: flex !important;
}

</style>
