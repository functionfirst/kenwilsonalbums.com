<template>
  <Layout>
    <div class="flex">
      <News class="w-2/3" />
      <div class="w-1/3 bg-light rounded p-4 shadow-lg ml-8">
        <h2 class="text-darker font-thin">Upcoming Gigs</h2>

      </div>
    </div>
  </Layout>
</template>

<script>
import News from '~/components/News.vue';

export default {
  components: { 
    News
  },
  metaInfo: {
    title: 'Ken Wilson Folk Singer and Artist'
  }
}
</script>
