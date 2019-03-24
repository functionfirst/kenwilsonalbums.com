<template>
  <Layout>
    <h1 class="leading-loose font-normal">Upcoming Gigs</h1>

    <div v-for="(gig, index) in Gigs.items" :key="index">
      <g-link v-if="gig.url" class="flex no-underline border-b border-base p-4 hover:bg-light justify-between">
        <div>
          <span class="font-bold underline">{{ gig.title }}</span>
          <span class="font-thin" v-if="gig.location">, {{ gig.location }}</span>
        </div>

        <div>{{ gig.date }}</div>
      </g-link>
      <div v-else class="flex border-b border-base p-4 justify-between">
        <div>
          <span class="font-bold">{{ gig.title }}</span>
          <span class="font-thin" v-if="gig.location">, {{ gig.location }}</span>
        </div>

        <div>{{ gig.date }}</div>
      </div>
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
