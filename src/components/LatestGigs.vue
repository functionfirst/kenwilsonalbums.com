<template>
  <div class="md:ml-12">
    <h2 class="font-serif font-thin text-dark mb-4 pb-4">Upcoming Gigs</h2>

    <div class="mb-8" v-for="{ node } in $static.allGigsPost.edges" :key="node.id">
      <div class="text-darker text-sm mb-1">{{ format(node.dateStart, 'ddd, Do MMMM YYYY') }}</div>
      <a v-if="node.url" :href="node.url" rel="noreferrer" target="_blank" class="block text-darker ">
        <h2 class="font-thin text-2xl">{{ node.title }}</h2>
      </a>
      <h2 v-else class="text-darker font-thin text-2xl">{{ node.title }}</h2>
    </div>

    <g-link to="/gigs" class="btn border-lighter text-darker hover:border-dark">See all Gigs...</g-link>
  </div>
</template>

<static-query>
  query Gigs {
    allGigsPost(sortBy: "dateStart", order: ASC, perPage: 5) {
      edges {
        node {
          id
          title
          url
          dateStart
        }
      }
    }
  }
</static-query>

<script>
import { format } from 'date-fns'

export default {
  methods: {
    format(d, str) {
      return format(d, str);
    }
  }
}
</script>
