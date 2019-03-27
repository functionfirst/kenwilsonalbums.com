<template>
  <Partial>
    <h1 class="leading-loose font-normal">Upcoming Gigs</h1>

    <Gigs />
  </Partial>
</template>

<script>
import Gigs from '~/components/Gigs'

export default {
  components: {
    Gigs
  },
  metaInfo: {
    title: 'Upcoming Gigs by Ken Wilson'
  }
}
</script>
