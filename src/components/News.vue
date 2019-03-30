<template>
  <div class="flex flex-wrap items-stretch">
    <div class="md:flex items-start mb-12" v-for="({ node }) in $static.allNewsPost.edges" :key="node.id">
      <g-link :to="node.slug">
        <g-image :src="node.image" :alt="`News image for ${node.title}`" />
      </g-link>

      <div class="md:ml-8 leading-normal max-w-md">
        <h2>
          <g-link :to="node.slug" class="text-darker hover:text-dark">
            {{ node.title }}
          </g-link>
        </h2>

        <div class="content" v-html="node.content"></div>
      </div>
    </div>
  </div>
</template>

<static-query>
query News {
  allNewsPost(sortBy: "DESC") {
    edges {
      node {
        id
        slug
        image (width: 265, height: 265, quality: 60, fit: cover)
        title
        content
      }
    }
  }
}
</static-query>

