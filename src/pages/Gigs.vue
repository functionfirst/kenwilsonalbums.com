<template>
  <Layout>
    <h1 class="leading-loose font-normal">Upcoming Gigs</h1>

    <div class="flex border-b border-base p-4 hover:bg-base justify-between" v-for="(gig, index) in Gigs.items" :key="index">
      <div class="flex">
        <g-link class="font-bold" v-if="gig.url">
          {{ gig.title }}
        </g-link>
        <div class="font-bold" v-else>
          {{ gig.title }}
        </div>

        <span class="font-thin ml-2" v-if="gig.location">- {{ gig.location }}</span>
      </div>

      <!-- <span>{{ gig.type }}</span> -->
      
      <span>{{ gig.date }}</span>
    </div> 
  </Layout>
</template>

<script>
import Gigs from '~/data/Gigs.yml'

export default {
  computed: {
    Gigs() {
      return Gigs
    }
  },
  metaInfo: {
    title: 'Upcoming Gigs by Ken Wilson'
  }
}
</script>
