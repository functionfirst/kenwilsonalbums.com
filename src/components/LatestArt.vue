<template>
  <div class="leading-normal text-white">
    <g-link
      :to="`art/${latestArt.slug}`"
      class="block mb-4 bg-white shadow p-2 hover:bg-dark"
    >
      <g-image
        class="block w-full"
        :alt="`Image of ${latestArt.title}`"
        :src="latestArt.image"
      />
    </g-link>

    <h3 class="font-thin text-2xl">
      {{ latestArt.title }}
    </h3>

    <p
      class="my-4 text-sm"
      v-html="latestArt.content"
    ></p>

    <g-link
      :to="`art/${latestArt.slug}`"
      class="btn text-white mt-6"
    >
      {{ latestArt.title }}
      <div class="uppercase mt-2">Buy Now &rarr;</div>
    </g-link>
  </div>
</template>

<script>
export default {
  computed: {
    latestArt() {
      const [{ node }, ...rest] = this.$static.allArtPost.edges;
      return node;
    }
  }
};
</script>


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
