<template>
  <Layout>
    <h1 class="leading-loose font-normal">{{ $page.albumPost.title }}</h1>

    <div class="md:flex items-start">
        <g-image :src="$page.albumPost.image" />

      <div class="md:mx-8 leading-normal flex-1">
        <p v-if="$page.albumPost.aside" class="mb-4 text-sm italic">
          {{ $page.albumPost.aside }}
        </p>

        <div class="content" v-html="$page.albumPost.content"></div>

        
      <h3>Reviews</h3>
      <p>
        Add a review here
      </p>
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
      image (width: 225, quality: 70, fit: inside)
      content
    }
  }
</page-query>

<script>
import PaypalButton from '~/components/PaypalButton'

export default {
  components: {
    PaypalButton
  },
  metaInfo () {
    return {
      title: this.$page.albumPost.title
    }
  }
}
</script>
