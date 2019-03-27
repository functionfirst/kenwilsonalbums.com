<template>
  <div class="flex min-h-screen flex-col">
    <Header/>
<!-- 
    <svg class="w-full flex-no-shrink" style="height: 2vw" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="2338" height="123" viewBox="0 0 2338 123">
      <path fill="#f8f8f5" d="M0 80h2340v43H0z"></path>
      <path fill="#b5a9a0" d="M2338-.353v121.818L0 79.799z"></path>
    </svg> -->

    <div class="flex-1 bg-lighter pb-12 p-2">
      <div class="mx-auto max-w-2xl">
        <slot/>
      </div>
    </div>

    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: { 
      Header,
      Footer
    }
}
</script>
