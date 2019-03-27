<template>
  <Layout>
    <div class="flex">
      <div class="w-2/3">
        <g-image src="~/assets/images/intro.jpg" width="750" class="mb-8 shadow-lg rounded w-full block" />
        <News />
      </div>
      <div class="w-1/3">
        <LatestArt/>
        <LatestGigs/>
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
