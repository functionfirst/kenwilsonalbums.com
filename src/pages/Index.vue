<template>
  <Layout>
    <div class="md:flex">
      <div class="md:w-2/3">
        <Welcome />
        <News />
      </div>
      <div class="md:w-1/3">
        <LatestArt/>
        <LatestGigs/>
      </div>
    </div>
  </Layout>
</template>

<script>
import News from '~/components/News.vue';
import Welcome from '~/components/Welcome.vue';
import LatestGigs from '~/components/LatestGigs.vue'
import LatestArt from '~/components/LatestArt.vue'

export default {
  components: { 
    News,
    LatestGigs,
    LatestArt,
    Welcome
  },
  metaInfo: {
    title: 'Ken Wilson Folk Singer and Artist'
  }
}
</script>
