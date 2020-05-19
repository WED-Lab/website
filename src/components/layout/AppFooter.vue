<template>
  <div>
    <footer>
      <div class="bg-dark-turquoise">
        <div class="w-5/6 mx-auto p-10">
          <div class="flex flex-col md:flex-row justify-between">
            <div class="">
              <ul class="flex flex-col">
                <li>
                  <g-link class="py-2 w-full block text-white hover:underline text-lg tracking-wider font-light" to="/">Home</g-link>
                </li>
                <li>
                  <g-link class="py-2 w-full block text-white hover:underline text-lg tracking-wider font-light" to="/seminars/">Seminars</g-link>
                </li>
                <li>
                  <g-link class="py-2 w-full block text-white hover:underline text-lg tracking-wider font-light" to="/people/">People</g-link>
                </li>
                <li>
                  <g-link class="py-2 w-full block text-white hover:underline text-lg tracking-wider font-light" to="/projects/">Projects</g-link>
                </li>
                <li>
                  <g-link class="py-2 w-full block text-white hover:underline text-lg tracking-wider font-light" to="/publications/">Publications</g-link>
                </li>
                <li>
                  <g-link class="py-2 w-full block text-white hover:underline text-lg tracking-wider font-light" to="/about/">About</g-link>
                </li>
              </ul>
            </div>
            <div class="w-2/6">
               <div class="flex justify-center mt-3">
                <ul>
                  <li class="flex items-start">
                    <div class="bg-light-turquoise rounded-full p-2 fill-current text-white">
                      <!--
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="primary" d="M11 3.05V2a1 1 0 0 1 2 0v1.05A10 10 0 0 1 22 13c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a10 10 0 0 1 9-9.95z"/><path class="secondary" d="M11 14a1 1 0 0 1 2 0v5a3 3 0 0 1-6 0 1 1 0 0 1 2 0 1 1 0 0 0 2 0v-5z"/></svg>
                      -->
                      <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">

                        <path fill="#fff" d="M17.051,3.302H2.949c-0.866,0-1.567,0.702-1.567,1.567v10.184c0,0.865,0.701,1.568,1.567,1.568h14.102c0.865,0,1.566-0.703,1.566-1.568V4.869C18.617,4.003,17.916,3.302,17.051,3.302z M17.834,15.053c0,0.434-0.35,0.783-0.783,0.783H2.949c-0.433,0-0.784-0.35-0.784-0.783V4.869c0-0.433,0.351-0.784,0.784-0.784h14.102c0.434,0,0.783,0.351,0.783,0.784V15.053zM15.877,5.362L10,9.179L4.123,5.362C3.941,5.245,3.699,5.296,3.581,5.477C3.463,5.659,3.515,5.901,3.696,6.019L9.61,9.86C9.732,9.939,9.879,9.935,10,9.874c0.121,0.062,0.268,0.065,0.39-0.014l5.915-3.841c0.18-0.118,0.232-0.36,0.115-0.542C16.301,5.296,16.059,5.245,15.877,5.362z"></path>
											</svg>
                    </div>
                    <address class="font-light tracking-wider text-white not-italic text-lg ml-3">
                      Institute for the Study of International Development<br />
                      Peterson Hall<br >
                      3460 McTavish Street<br />
                      Montréal, Québec, H3A 0E6
                    </address>
                  </li>
                  <li class="flex items-start mt-5">
                    <div class="bg-light-turquoise rounded-full p-2 fill-current text-white">
                      <!--
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="primary" d="M11 3.05V2a1 1 0 0 1 2 0v1.05A10 10 0 0 1 22 13c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a10 10 0 0 1 9-9.95z"/><path class="secondary" d="M11 14a1 1 0 0 1 2 0v5a3 3 0 0 1-6 0 1 1 0 0 1 2 0 1 1 0 0 0 2 0v-5z"/></svg>
                      -->
                      <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">

                        <path fill="#fff" d="M17.051,3.302H2.949c-0.866,0-1.567,0.702-1.567,1.567v10.184c0,0.865,0.701,1.568,1.567,1.568h14.102c0.865,0,1.566-0.703,1.566-1.568V4.869C18.617,4.003,17.916,3.302,17.051,3.302z M17.834,15.053c0,0.434-0.35,0.783-0.783,0.783H2.949c-0.433,0-0.784-0.35-0.784-0.783V4.869c0-0.433,0.351-0.784,0.784-0.784h14.102c0.434,0,0.783,0.351,0.783,0.784V15.053zM15.877,5.362L10,9.179L4.123,5.362C3.941,5.245,3.699,5.296,3.581,5.477C3.463,5.659,3.515,5.901,3.696,6.019L9.61,9.86C9.732,9.939,9.879,9.935,10,9.874c0.121,0.062,0.268,0.065,0.39-0.014l5.915-3.841c0.18-0.118,0.232-0.36,0.115-0.542C16.301,5.296,16.059,5.245,15.877,5.362z"></path>
											</svg>
                    </div>
                    <div class="font-light tracking-wider text-white not-italic text-lg ml-3">
                      <span class="sr-only">Email: </span><a class="hover:underline" href="mailto:wedlab.isid@mcgill.ca">wedlab.isid@mcgill.ca</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-light-gray">
        <div class="w-5/6 mx-auto p-10">
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
