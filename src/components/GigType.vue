<template>
  <span class="inline-block bg-darker text-lighter rounded text-xs py-1 px-2 mt-1">{{ text }}</span>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "solo"
    }
  },
  computed: {
    text() {
      return this.type === 'solo' ? 'Solo Gig' : 'Wilson Family Gig'
    }
  }
};
</script>
