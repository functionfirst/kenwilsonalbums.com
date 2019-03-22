<template>
  <div class="flex leading-loose">
    <g-link v-for="(item, index) in breadcrumb" :key="index" :to="item.url" class="block text-darker hover:text-dark no-underline hover:underline p-2">{{ item.text }}</g-link>
  </div>
</template>

<script>
export default {
  props: {
    breadcrumb: {
      type: Array,
      required: true
    }
  }  
}
</script>

