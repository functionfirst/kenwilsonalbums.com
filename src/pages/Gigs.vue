<template>
  <Layout>
    <h1 class="leading-loose font-normal mb-8">
      Upcoming Appearances
    </h1>

    <Gigs />
  </Layout>
</template>

<script>
import Gigs from "~/components/Gigs";

export default {
  components: {
    Gigs
  },
  metaInfo: {
    title: "Upcoming Gigs by Ken Wilson"
  }
};
</script>
