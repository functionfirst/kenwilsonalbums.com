<template>
  <div class="flex items-center">
    Filter:
    <g-link to="/art" :class="[linkCSS, activeCSS('all')]">All</g-link>

    <g-link to="/art/animals" :class="[linkCSS, activeCSS('animals')]">Animals</g-link>

    <g-link to="/art/portraits" :class="[linkCSS, activeCSS('portraits')]" >Portraits</g-link>
  </div>
</template>

<script>
export default {
  props: {
    selected: {
      type: String,
      default: "all"
    }
  },
  methods:{ 
    activeCSS(type) {
      return this.selected === type ? 'bg-darker text-lighter border-darker hover:text-lighter' : 'hover:text-darker';
    },
  },
  computed: {
    linkCSS() {
      return ' ml-2 rounded-full no-underline hover:border-darker px-4 py-1 border border-dark';
    }
  }
}
</script>
