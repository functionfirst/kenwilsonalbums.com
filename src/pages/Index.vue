<template>
  <Layout>
    <div class="md:flex -mx-4">
      <div class="md:w-1/3 px-4">
        <LatestNews />

        <router-link to="voice-of-the-tees">
          Voice of the Tees
          <g-image
            src="/images/print-copy-111111.bpng.f06b754.0c5bf10.png"
            width="350"
          />
        </router-link>
      </div>
      <div class="md:w-1/3 px-4 mt-12 md:mt-0">
        <LatestGigs/>
      </div>
      <div class="md:w-1/3 px-4 mt-12 md:mt-0">
        <LatestArt/>
      </div>
    </div>
  </Layout>
</template>

<script>
import LatestNews from '~/components/LatestNews.vue';
import LatestGigs from '~/components/LatestGigs.vue'
import LatestArt from '~/components/LatestArt.vue'

export default {
  components: {
    LatestNews,
    LatestGigs,
    LatestArt
  },
  metaInfo: {
    title: 'Ken Wilson Folk Singer and Artist'
  }
}
</script>
