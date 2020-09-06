<template>
  <div class="text-white leading-normal">
    <div v-for="({ node }) in $static.allNewsPost.edges" :key="node.id">
      <g-link :to="node.path" class="block mb-4 bg-white shadow p-2 hover:bg-dark">
        <g-image :src="node.image" :alt="`Image for ${node.title}`" class="block w-full" />
      </g-link>

      <h3 class="font-thin text-2xl">{{ node.title }}</h3>

      <div class="text-sm my-4">{{ node.date }}</div>

      <div v-html="node.content" />

      <g-link to="/news/" class="btn text-white mt-6">
        Latest News
        <div class="uppercase">Read More &rarr;</div>
      </g-link>
    </div>
  </div>
</template>

<static-query>
query News {
  allNewsPost(sortBy: "date", order: DESC, perPage: 1) {
    edges {
      node {
        id
        path
        title
        content
        image (width: 400, height: 300, quality: 70, fit: cover)
        date (format: "dddd, Do MMMM YYYY")
      }
    }
  }
}
</static-query>
