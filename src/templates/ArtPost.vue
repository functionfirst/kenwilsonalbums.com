<template>
  <Layout>
    <h1 class="leading-loose font-normal">{{ $page.art.title }}</h1>

    <div class="md:flex items-start">
      <div class="flex-1x w-1/2 mr-12">
        <img :src="`/images/${$page.art.image}`" />
        <!-- <g-image :src="`/images/${$page.art.image}`" /> -->
        <div class="content" v-html="$page.art.content"></div>
      </div>

      <div class="flex-1">
        <paypal-art-button :item="$page.art" />
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
import PaypalArtButton from '~/components/PaypalArtButton'

export default {
  components: {
    PaypalArtButton
  },
  metaInfo () {
    return {
      title: this.$page.art.title
    }
  }
}
</script>
