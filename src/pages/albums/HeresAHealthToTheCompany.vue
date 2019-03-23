<template>
  <Layout>
    <h1 class="leading-loose font-normal">{{ album.title }}</h1>

    <div class="md:flex">
      <div class="flex justify-center items-start">
        <g-image :src="`/images/${album.image}`" />
      </div>

      <div class="mt-4 md:mt-0 md:mx-8 leading-normal">
        

        <p v-if="album.aside" class="my-4 text-sm italic">
          {{ album.aside }}
        </p>

        <p class="my-4 markup">{{ album.description }}</p>
      </div>

      <paypal-button :item="item" />
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
    this.getAlbumData();
  },
  computed: {
    totalPrice() {
      return this.delivery + this.price;
    }
  },
  methods: {
    getAlbumData() {
      this.item = {
        name: this.album.name,
        number: this.album.code,
        amount: this.album.price,
        postage: this.album.postage
      };
    }
  },
  data () {
    return {
      album: null,
      item: null
    }
  },
  metaInfo: {
    title: 'Here\'s a Health to the Company by Ken Wilson'
  }
}
</script>
