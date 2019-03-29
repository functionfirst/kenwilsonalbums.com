<template>
  <div class="md:ml-12 mb-8">
    <!-- <h2 class="font-thin text-dark mb-4 pb-4">Latest Art</h2> -->

    <g-link
      :to="`art/${node.slug}`"
      v-for="{ node } in $static.allArtPost.edges"
      :key="node.id"
      class="block border p-4 bg-base rounded shadow-lg no-underline hover:opacity-75"
    >
      <div class="">
        <g-image class="block" :src="node.image" />
      </div>

      <h2 class="text-darker font-thin text-xl mt-2">{{ node.title }}</h2>
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
          image (width: 300, height: 300, quality: 70, fit: cover)
        }
      }
    }
  }
</static-query>
