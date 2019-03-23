<template>
  <Layout>
    <album-data>
      <div slot-scope="{ album }" v-if="album">
        <h1 v-if="album" class="leading-loose font-normal">{{ album.title }}</h1>

        <div v-if="album" class="md:flex items-start">
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
      </div>
    </album-data>
  </Layout>
</template>

<script>
import PaypalButton from '~/components/PaypalButton'
import AlbumData from '~/components/DataAlbum'

export default {
  components: {
    AlbumData,
    PaypalButton
  },
  metaInfo: {
    title: 'Not Before Time by Ken Wilson'
  }
}
</script>
