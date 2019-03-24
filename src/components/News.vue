<template>
  <ul>
    <li v-for="{ node } in $static.allNewsPost.edges" :key="node.id">
      <g-link :to="node.path">
        <h6 v-html="node.title"/>
      </g-link>
      <span v-html="node.date"/>
    </li>
  </ul>
</template>

<static-query>
  query News {
    allNewsPost(sortBy: "DESC") {
      edges {
        node {
          id
          title
          date (format: "YYYY")
          path
        }
      }
    }
  }
</static-query>
