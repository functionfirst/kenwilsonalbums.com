<template>
  <Partial>
    <h1 class="leading-loose font-normal">Albums</h1>

    <Albums/>
  </Partial>
</template>

<script>
import Albums from '~/components/Albums'

export default {
  components:{
    Albums
  },
  metaInfo: {
    title: 'Album Releases by Ken Wilson'
  }
}
</script>
