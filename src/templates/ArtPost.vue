<template>
  <Partial>
    <h1 class="font-serif leading-loose font-normal">{{ $page.art.title }}</h1>

    <div class="md:flex items-start">
      <div class="flex-1 mr-12">
        <g-image :src="$page.art.image" :alt="`Image of ${$page.art.title}`" />
        <div class="content" v-html="$page.art.content"></div>
      </div>

      <div class="flex-x1 w-1/3">
        <paypal-art-button :item="$page.art" />
      </div>
    </div>
  </Partial>
</template>

<page-query>
query ArtPost ($path: String!) {
  art: artPost (path: $path) {
    title
    content
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
