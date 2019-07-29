<template>
  <div>
    <g-link
      :to="`art/${node.slug}`"
      v-for="{ node } in $static.allArtPost.edges"
      :key="node.id"
      class="block relative no-underline hover:opacity-75"
    >
      <div class="relative">
        <div class="absolute pin"></div>
        <g-image class="rounded shadow-lg block w-full" :alt="`Image of ${node.title}`" :src="node.image" />
      </div>

      <div class="absolute rounded-b text-lighter pin-b pin-x p-3 bg-darker opacity-75">
        <h2 class="font-thin text-xl">{{ node.title }}</h2>

        <div class="mt-1 text-sm" v-html="node.content"></div>
      </div>
    </g-link>
  </div>
</template>

<static-query>
  query {
    allArtPost(perPage: 1, filter: { homepage: { eq: true } }) @paginate {
      pageInfo {
        totalPages,
        currentPage
      }
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
