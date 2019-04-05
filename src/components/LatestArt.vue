<template>
  <div>
    <h2 class="font-serif font-thin mb-4 pb-2">Latest Artwork</h2>

    <g-link
      :to="`art/${node.slug}`"
      v-for="{ node } in $static.allArtPost.edges"
      :key="node.id"
      class="block relative no-underline hover:opacity-75"
    >
      <g-image class="rounded shadow-lg block w-full" :alt="`Image of ${node.title}`" :src="node.image" />

      <div class="absolute rounded-b text-lighter pin-b pin-x p-3 bg-darker opacity-75">
        <h2 class="font-thin text-xl">{{ node.title }}</h2>

        <div class="mt-1 text-sm" v-html="node.content"></div>
      </div>
    </g-link>
  </div>
</template>

<static-query>
  query {
    allArtPost(
      filter: {
        homepage: { eq: true }
      }
    ) {
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
