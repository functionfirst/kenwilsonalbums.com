<template>
  <div class="flex flex-wrap items-stretch -mx-4">
    <div class="flex md:w-1/3" v-for="({ node }) in items" :key="node.id">
      <g-link
        :to="`/art/${node.slug}`"
        class="hover:bg-grey-100 relative m-4 border border-grey-200 p-4 hover:border-grey-300 no-underline"
      >
        <div class="flex-1 relative">
          <div class="absolute pin"></div>
          <g-image :src="node.image" :alt="`Image of ${node.title}`" />
        </div>

        <h3 class="mt-4 text-sm leading-normal">{{ node.title }}</h3>
      </g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: []
    }
  }
};
</script>
