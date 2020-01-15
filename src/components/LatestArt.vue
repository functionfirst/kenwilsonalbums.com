<template>
  <div>
    <div v-for="{ node } in $static.allArtPost.edges" :key="node.id">
      <g-link :to="`art/${node.slug}`" class="block no-underline mb-4">
        <g-image class="block w-full" :alt="`Image of ${node.title}`" :src="node.image" />
      </g-link>

      <h2 class="text-lg">{{ node.title }}</h2>

      <p class="leading-normal my-4 text-sm" v-html="node.content"></p>

      <g-link
        :to="`art/${node.slug}`"
        class="btn border-darker text-darker hover:border-dark"
      >Buy this artwork &rarr;</g-link>
    </div>
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
