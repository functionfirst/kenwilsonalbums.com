<template>
  <div class="flex flex-wrap items-stretch">
    <div class="flex items-start xs:w-1/2 sm:w-1/3 md:w-1/4 mb-2" v-for="({ node }) in $static.allArtPost.edges" :key="node.id">
      <g-link :to="node.slug" class="hover:opacity-75 relative m-2 flex flex-col border border-base p-2 hover:border-dark no-underline">
        <div class="flex-1">
          <g-image :src="node.image" :alt="`Image of ${node.title}`" />
        </div>

        <h3 class="text-sm leading-normal">
          {{ node.title }}
        </h3>
      </g-link>
    </div>
  </div>
</template>

<static-query>
query Art {
  allArtPost(sortBy: "DESC") {
    edges {
      node {
        id
        slug
        image (width: 265, height: 265, quality: 60, fit: cover)
        title
      }
    }
  }
}
</static-query>

