<template>
  <div>
    <h2 class="font-serif font-thin mb-4 pb-2">Latest Artwork</h2>

    <g-link
      :to="`art/${node.slug}`"
      v-for="{ node } in $static.allArtPost.edges"
      :key="node.id"
      class="block relative rounded shadow-lg no-underline hover:opacity-75"
    >
      <g-image class="block" :alt="`Image of ${node.title}`" :src="node.image" />

      <div class="absolute text-lighter pin-b pin-x p-3 bg-darker opacity-75">
        <h2 class="font-thin text-xl mt-2">{{ node.title }}</h2>

        <div class="content" v-html="node.content"></div>
      </div>
    </g-link>
  </div>
</template>

<static-query>
  query Art {
    allArtPost(sortBy: "date", order: DESC, perPage: 1) {
      edges {
        node {
          id
          title
          slug
          content
          image (width: 400, height: 1000, quality: 70, fit: inside)
        }
      }
    }
  }
</static-query>
