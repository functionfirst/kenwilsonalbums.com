<template>
  <div class="flex flex-wrap items-stretch">
    <div class="flex items-start w-1/4 mb-2" v-for="({ node }) in $static.allArtPost.edges" :key="node.id">
      <g-link :to="node.slug" class="hover:opacity-75 relative m-2 flex flex-col hover:bg-base no-underline">
        <div class="flex-1">
          <img :src="`/images/${node.image}`" />
        </div>

        <p class="text-sm absolute p-2 opacity-75 pin-b pin-l pin-r bg-darker text-lighter text-center">
          {{ node.title }}
        </p>
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
        image
        title
        path
        content
      }
    }
  }
}
</static-query>

