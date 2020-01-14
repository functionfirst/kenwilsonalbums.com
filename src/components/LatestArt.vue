<template>
  <div>
    <h2 class="font-thin border-b pb-4">Latest Art</h2>

    <g-link
      :to="`art/${node.slug}`"
      v-for="{ node } in $static.allArtPost.edges"
      :key="node.id"
      class="block no-underline"
    >
      <g-image
        class="rounded shadow-lg block w-full"
        :alt="`Image of ${node.title}`"
        :src="node.image"
      />

      <h2 class="text-lg">{{ node.title }}</h2>

      <div class="mt-1 text-sm" v-html="node.content"></div>
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
