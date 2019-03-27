<template>
  <div>
    <h2 class="font-thin text-dark mb-4 pb-4">Latest News</h2>

    <div class="flex -mx-8">
      <div v-for="{ node } in $static.allNewsPost.edges" :key="node.id" class="px-8 flex-1">
        <g-image :src="node.image" />

        <h2 class="text-light font-thin text-4xl">{{ node.title }}</h2>

        
        <div class="text-dark text-sm my-2">{{ node.date }}</div>

        <div class="text-base leading-normal" v-html="node.content"/>
      </div>
    </div>
  </div>
</template>

<static-query>
  query News {
    allNewsPost(sortBy: "date", order: DESC, perPage: 2) {
      edges {
        node {
          id
          title
          content
          image (width: 400, height: 300, quality: 70, fit: cover)
          date (format: "dddd, Do MMMM YYYY")
        }
      }
    }
  }
</static-query>
