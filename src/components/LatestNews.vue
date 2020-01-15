<template>
  <div>
    <g-link
      :to="node.path"
      class="no-underline block hover:opacity-75"
      v-for="({ node }) in $static.allNewsPost.edges"
      :key="node.id"
    >
      <g-image :src="node.image" :alt="`Image for ${node.title}`" class="block w-full" />

      <h2 class="text-darker font-thin text-4xl mt-2">{{ node.title }}</h2>

      <div class="text-darker text-sm my-4">{{ node.date }}</div>

      <div class="text-darker leading-normal" v-html="node.content" />
    </g-link>

    <g-link
      to="/news/"
      class="btn mt-4 border-darker text-darker hover:border-dark"
    >Read all News &rarr;</g-link>
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
