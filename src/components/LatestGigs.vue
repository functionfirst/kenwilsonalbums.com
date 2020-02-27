<template>
  <div>
    <div class="mb-6" v-for="{ node } in $static.allGigsPost.edges" :key="node.id">
      <div class="text-darker text-sm mb-1">{{ format(node.date_start, 'ddd, Do MMMM YYYY') }}</div>
      <a
        v-if="node.url"
        :href="node.url"
        rel="noreferrer"
        target="_blank"
        class="block text-darker"
      >
        <h2 class="text-lg">{{ node.title }}</h2>
      </a>
      <h2 v-else class="text-lg">{{ node.title }}</h2>
    </div>

    <g-link to="/gigs/" class="btn border-darker text-darker hover:border-dark">See all Gigs &rarr;</g-link>
  </div>
</template>

<static-query>
  query Gigs {
    allGigsPost(sortBy: "date_start", order: ASC, perPage: 5) {
      edges {
        node {
          id
          title
          date_start
        }
      }
    }
  }
</static-query>

<script>
import { format } from "date-fns";

export default {
  methods: {
    format(d, str) {
      return format(d, str);
    }
  }
};
</script>
