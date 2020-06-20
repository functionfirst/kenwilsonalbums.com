<template>
  <div class="leading-normal text-white">
    <div
      v-for="{ node } in $static.allArtPost.edges"
      :key="node.id"
    >
      <g-link
        :to="`art/${node.slug}`"
        class="block mb-4 bg-white shadow p-2 hover:bg-dark"
      >
        <g-image
          class="block w-full"
          :alt="`Image of ${node.title}`"
          :src="node.image"
        />
      </g-link>

      <h3 class="font-thin text-2xl">
        {{ node.title }}
      </h3>

      <p
        class="my-4 text-sm"
        v-html="node.content"
      ></p>

      <g-link
        :to="`art/${node.slug}`"
        class="btn text-white mt-6"
      >
        {{ node.title }}
        <div class="uppercase mt-2">Buy Now &rarr;</div>
      </g-link>
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
