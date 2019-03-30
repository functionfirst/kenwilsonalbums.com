<template>
  <Layout>
    <div class="md:flex -mx-4">
      <div class="md:w-1/3 px-4">
        <News />
      </div>
      <div class="md:w-1/3 px-4">
        <LatestGigs/>
      </div>
      <div class="md:w-1/3 px-4">
        <LatestArt/>
      </div>
    </div>
  </Layout>
</template>

<script>
import News from '~/components/News.vue';
import LatestGigs from '~/components/LatestGigs.vue'
import LatestArt from '~/components/LatestArt.vue'

export default {
  components: { 
    News,
    LatestGigs,
    LatestArt
  },
  metaInfo: {
    title: 'Ken Wilson Folk Singer and Artist'
  }
}
</script>
