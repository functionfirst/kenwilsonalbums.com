<template>
  <Layout>
    <h1 class="leading-loose font-normal">News</h1>

    <News/>
  </Layout>
</template>

<script>
import News from '~/components/News'

export default {
  components: {
    News
  },
  metaInfo: {
    title: 'Latest News from Ken Wilson'
  }
}
</script>
