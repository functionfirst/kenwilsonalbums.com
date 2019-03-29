<template>
  <header class="md:flex items-center md:py-8 max-w-2xl mx-auto justify-between w-full">
    <div class="flex justify-between">
      <g-link to="/" class="no-underline p-4 block hover:opacity-75">
        <span class="font-serif text-lighter text-2xl">Ken Wilson</span>
        <div class="mt-1 text-sm text-dark">Folk Music &amp; Art</div>
      </g-link>

      <button class="md:hidden flex items-end justify-center flex-col text-lighter p-3" @click="toggleMenu = !toggleMenu">
        <span class="border-b-2 mb-1 w-8 border-lighter"></span>
        <span class="border-b-2 mb-1 w-6 border-lighter"></span>
        <span class="border-b-2 mb-2 w-4 border-lighter"></span>
        <span class="text-sm">Menu</span>
      </button>
    </div>

    <Nav :class="[toggleMenu ? '' : 'hidden']" />

    <a :class="[toggleMenu ? 'flex' : 'hidden']" href="https://www.facebook.com/profile.php?id=100014788714532" rel="noreferrer" target="_blank" class="py-4 px-6 items-center text-lighter hover:text-dark no-underline">
      <div class="bg-lighter text-darker rounded-full p-2 mr-2 flex items-center justify-center">
          <facebook-icon/>
          <!-- <svg class="fill-current w-4 h-4" viewBox="0 0 13 32" height="18" width="13"><use xlink:href="#icon-facebook"></use></svg> -->
      </div>
      Follow Ken on Facebook
    </a>
  </header>
</template>

<script>
import Nav from "~/components/Nav";
import FacebookIcon from "~/components/icons/Facebook";

export default {
  components: {
    Nav,
    FacebookIcon
  },
  data() {
    return {
      toggleMenu: false
    };
  }
};
</script>
