<template>
  <Layout>
    <h1 class="leading-loose font-normal mb-2">
      {{ $page.albumPost.title }}
    </h1>

    <p class="flex list-reset mb-4">
      <g-link
        to="/albums"
        class="no-underline"
      >
        &larr; View all Albums
      </g-link>
    </p>

    <div class="md:flex items-start">
      <g-image :src="$page.albumPost.image" />

      <div class="md:mx-8 leading-normal flex-1">
        <p
          v-if="$page.albumPost.aside"
          class="mb-4 italic"
        >
          {{ $page.albumPost.aside }}
        </p>

        <div
          class="content leading-loose"
          v-html="$page.albumPost.content"
        ></div>

        <template v-if="$page.albumPost.reviews">
          <h3 class="font-thin text-2xl">Album Reviews</h3>

          <div
            class="content"
            v-html="$page.albumPost.reviews"
          ></div>
        </template>
      </div>

      <paypal-button :item="$page.albumPost" />
    </div>
  </Layout>
</template>

<page-query>
  query album ($path: String!) {
    albumPost (path: $path) {
      title
      aside
      image
      content
      reviews
    }
  }
</page-query>

<script>
import PaypalButton from "~/components/PaypalButton";

export default {
  components: {
    PaypalButton
  },
  metaInfo() {
    return {
      title: this.$page.albumPost.title
    };
  }
};
</script>
