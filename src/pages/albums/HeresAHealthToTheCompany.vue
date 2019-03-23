<template>
  <Layout>
    <album-data>
      <div slot-scope="{ album }" v-if="album">
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
    title: 'Here\'s a Health to the Company by Ken Wilson and Jim McFarlane'
  }
}
</script>
