<template>
  <Layout>
    <h1 v-if="album" class="leading-loose font-normal">{{ album.title }}</h1>

    <div class="md:flex" v-if="album">
      <div class="flex justify-center items-start">
        <g-image :src="`/images/${album.image}`" />
      </div>

      <div class="mt-4 md:mt-0 md:mx-8 leading-normal">
        <!-- <h2>{{ album.title }}</h2> -->

        <p v-if="album.aside" class="my-4 text-sm italic">
          {{ album.aside }}
        </p>

        <p class="my-4 markup">{{ album.description }}</p>
      </div>

      <paypal-button :item="album" />
    </div>
  </Layout>
</template>

<script>
import PaypalButton from '~/components/PaypalButton'
import Albums from '~/data/Albums.yml'

export default {
  components: {
    PaypalButton
  },
  created () {
    this.album = Albums.items.find(item => item.url == this.$route.fullPath)
  },
  computed: {
    totalPrice() {
      return this.delivery + this.price;
    }
  },
  data () {
    return {
      album: null
    }
  },
  metaInfo: {
    title: 'Portraits by Ken Wilson'
  }
}
</script>
