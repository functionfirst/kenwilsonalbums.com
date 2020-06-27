<template>
  <div>
    <div
      class="md:flex items-start mb-12"
      v-for="({ node }) in $static.albums.edges"
      :key="node.id"
    >
      <g-link :to="`/albums/${node.slug}`">
        <g-image
          :src="node.image"
          :alt="`Album image for ${node.title}`"
        />
      </g-link>

      <div class="md:ml-8 leading-normal max-w-md">
        <h2>
          <g-link
            :to="`/albums/${node.slug}`"
            class="text-darker hover:text-dark"
          >{{ node.title }}</g-link>
        </h2>

        <p
          v-if="node.aside"
          class="my-4 text-sm italic"
        >{{ node.aside }}</p>

        <div
          class="content leading-loose"
          v-html="node.content"
        ></div>
      </div>
    </div>
  </div>
</template>

<static-query>
query Albums {
  albums: allAlbumPost(sortBy: "DESC") {
    edges {
      node {
        id
        slug
        aside
        image
        title
        content
      }
    }
  }
}
</static-query>
