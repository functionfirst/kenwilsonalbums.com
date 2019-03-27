<template>
  <header class="flex items-center py-8 max-w-2xl mx-auto justify-between w-full">
      <g-link to="/" class="no-underline p-4 hover:opacity-75">
        <span class="font-serif text-lighter text-2xl">Ken Wilson</span>
        <div class="mt-1 text-sm text-dark">Folk Music &amp; Art</div>
      </g-link>

      <Nav/>

      <a href="https://www.facebook.com/profile.php?id=100014788714532" target="_blank" class="py-4 px-6 flex items-center text-lighter hover:text-dark no-underline">
        <div class="bg-lighter text-darker rounded-full p-2 mr-2 flex items-center justify-center">
            <facebook-icon/>
            <!-- <svg class="fill-current w-4 h-4" viewBox="0 0 13 32" height="18" width="13"><use xlink:href="#icon-facebook"></use></svg> -->
        </div>
        Follow Ken on Facebook
      </a>
  </header>
</template>

<script>
import Nav from '~/components/Nav'
import FacebookIcon from '~/components/icons/Facebook'

export default {
  components: {
    Nav,
    FacebookIcon
  }
}
</script>
