<template>
  <Layout>
    <h1 class="font-serif leading-loose font-normal">{{ $page.art.title }}</h1>

    <div class="md:flex items-start">
      <div class="flex-1 md:mr-12">
        <div class="relative">
          <div class="absolute pin"></div>
          <g-image :src="$page.art.image" :alt="`Image of ${$page.art.title}`" />
        </div>
        <div class="content" v-html="$page.art.content"></div>
      </div>

      <div class="md:w-1/3">
        <paypal-art-button :posters="posters" :types="types" :item="$page.art" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ArtPost ($path: String!) {
  art: artPost (path: $path) {
    title
    content
    image (width: 560, quality: 70, fit: inside)
  }
}
</page-query>

<script>
import posters from "~/data/posters";
import types from "~/data/types";
import PaypalArtButton from "~/components/PaypalArtButton";

export default {
  data() {
    return {
      posters,
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
