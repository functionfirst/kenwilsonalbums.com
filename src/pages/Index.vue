<template>
  <Layout>
    <div class="md:flex -mx-4">
      <div class="md:w-1/3 px-4">
        <LatestNews />
      </div>
      <div class="md:w-1/5 px-4 mt-12 md:mt-0">
        <LatestGigs />
      </div>
      <div class="flex-1 px-4 mt-12 md:mt-0">
        <VoiceOfTheTees />

        <LatestArt />
      </div>
    </div>
  </Layout>
</template>

<script>
import LatestNews from "~/components/LatestNews.vue";
import LatestGigs from "~/components/LatestGigs.vue";
import LatestArt from "~/components/LatestArt.vue";
import VoiceOfTheTees from "~/components/VoiceOfTheTees.vue";

export default {
  components: {
    LatestNews,
    LatestGigs,
    LatestArt,
    VoiceOfTheTees
  },
  metaInfo: {
    title: "Ken Wilson Folk Singer and Artist"
  }
};
</script>
