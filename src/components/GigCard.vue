<template>
  <a :href="url" v-if="url" target="_blank" class="hover:bg-light hover:text-darker">
    <slot />
  </a>
  <div v-else>
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
    }
  }
}
</script>
