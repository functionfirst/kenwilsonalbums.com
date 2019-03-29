<template>
  <div>
    <div class="flex flex-wrap -mx-8">
      <div v-for="({ node }) in $static.allNewsPost.edges" :key="node.id" class="w-1/2 px-8">
        <g-image :src="node.image" class="rounded shadow-lg block w-full" />

        <h2 class="text-light font-thin text-4xl mt-2">{{ node.title }}</h2>
        
        <div class="text-dark text-sm my-4">{{ node.date }}</div>

        <div class="text-base leading-normal" v-html="node.content"/>
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
        title
        content
        image (width: 400, height: 300, quality: 70, fit: cover)
        date (format: "dddd, Do MMMM YYYY")
      }
    }
  }
}
</static-query>
