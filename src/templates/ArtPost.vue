<template>
  <Layout>
    <h1 class="leading-loose font-normal mb-2">
      {{ $page.art.title }}
    </h1>

    <p class="flex list-reset mb-4">
      <g-link
        to="/art"
        class="no-underline"
      >
        &larr; View all Art
      </g-link>
    </p>

    <div class="max-w-sm lg:max-w-full lg:flex items-start mx-auto">
      <div class="bg-white p-8 shadow-md flex-1 lg:mr-12">
        <div class="relative">
          <div class="absolute pin"></div>
          <g-image
            :src="$page.art.image"
            :alt="`Image of ${$page.art.title}`"
          />
        </div>
      </div>

      <div class="lg:w-2/5">

        <div
          class="content"
          v-html="$page.art.content"
        ></div>

        <paypal-art-button
          :products="products"
          :types="types"
          :item="$page.art"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ArtPost ($path: String!) {
  art: artPost (path: $path) {
    title
    content
    image
  }
}
</page-query>

<script>
import products from "~/data/posters";
import types from "~/data/types";
import PaypalArtButton from "~/components/PaypalArtButton";

export default {
  data() {
    return {
      products,
      types
    };
  },

  components: {
    PaypalArtButton
  },

  metaInfo() {
    return {
      title: this.$page.art.title
    };
  }
};
</script>
