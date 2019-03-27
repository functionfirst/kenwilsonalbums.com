<template>
  <Layout>
    <div class="flex">
      <News class="w-2/3" />
      <div class="w-1/3">
        <LatestGigs/>
      </div>
    </div>
  </Layout>
</template>

<script>
import News from '~/components/News.vue';
import LatestGigs from '~/components/LatestGigs.vue'

export default {
  components: { 
    News,
    LatestGigs
  },
  metaInfo: {
    title: 'Ken Wilson Folk Singer and Artist'
  }
}
</script>
