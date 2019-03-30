<template>
  <Layout>
    <div class="md:flex">
      <div class="md:w-2/3">
        <News />
      </div>
      <div class="md:w-1/3">
        <LatestGigs/>
      </div>
      <div class="md:w-1/3">
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
