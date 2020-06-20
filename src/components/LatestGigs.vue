<template>
  <div class="bg-light rounded-sm p-4 shadow">

    <div class="flex items-start">
      <svg
        height="50"
        viewBox="0 0 24 22"
        width="55"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m12 4.177 8.631 15.823h-17.262zm0-4.177-12 22h24zm-1 9h2v6h-2zm1 9.75c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25z" />
      </svg>

      <div class="ml-4 flex-1">
        <h3 class="text-2xl font-medium mb-2">
          Gigs in 2020
        </h3>

        <p class="leading-normal text-lg">
          Due to the ongoing Coronavirus situation and social-distancing rules
          all of my 2020 Gigs have currently been cancelled.
        </p>
      </div>
    </div>

    <!--
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
    -->
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
