<template>
  <div class="flex min-h-screen flex-col">
    <Header/>

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
