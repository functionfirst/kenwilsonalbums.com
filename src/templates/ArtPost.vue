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
        <paypal-art-button
          :posters="posters"
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
    image (width: 560, quality: 70, fit: inside)
  }
}
</page-query>

<script>
import PaypalArtButton from '~/components/PaypalArtButton'

export default {
  components: {
    PaypalArtButton
  },

  data () {
    return {
      posters: [
        {
          name: 'Poster A4 12in x 8in',
          size: "A4",
          dimensions: '12" x 8"',
          type: "Poster",
          price: 15
        },
        {
          name: 'Poster A3 16in x 12in',
          size: "A3",
          dimensions: '16" x 12"',
          type: "Poster",
          price: 25
        },
        {
          name: 'Canvas A3 16in x 12in',
          size: "A3",
          dimensions: '16" x 12"',
          type: "Canvas",
          price: 50
        },
        {
          name: 'Canvas A2 30in x 20in',
          size: "A2",
          dimensions: '30" x 20"',
          type: "Canvas",
          price: 85
        }
      ]
    }
  },

  metaInfo () {
    return {
      title: this.$page.art.title
    }
  }
}
</script>
