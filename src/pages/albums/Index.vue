<template>
  <Layout>
    <h1 class="leading-loose font-normal">Albums</h1>

    <div class="flex items-start mt-12" v-for="(album, index) in Albums.items" :key="index">
       <g-link :to="album.url">
         <g-image :src="`/images/${album.image}`" />
       </g-link>
       
      <div class="ml-8 leading-normal max-w-md">
        <h2>
          <g-link :to="album.url" class="text-darker hover:text-dark">
            {{ album.title }}
          </g-link>
        </h2>

         <p v-if="album.aside" class="my-4 text-sm italic">
            {{ album.aside }}
        </p>

         <p class="my-4 markup">{{ album.description }}</p>
      </div>
    </div>
  </Layout>
</template>

<script>
import Albums from '~/data/Albums.yml'
export default {
  computed: {
    Albums() {
      return Albums
    }
  },
  metaInfo: {
    title: 'Album Releases by Ken Wilson'
  }
}
</script>

