<template>
  <div class="flex flex-wrap items-stretch">
    <div class="flex items-start md:w-1/3 lg:w-1/4 mb-2" v-for="({ node }) in items" :key="node.id">
      <g-link
        :to="`/art/${node.slug}`"
        class="hover:opacity-75 relative m-2 flex flex-col border border-base p-2 hover:border-dark no-underline"
      >
        <div class="flex-1 relative">
          <div class="absolute pin"></div>
          <g-image :src="node.image" :alt="`Image of ${node.title}`" />
        </div>

        <h3 class="text-sm leading-normal">{{ node.title }}</h3>
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
