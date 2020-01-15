<template>
  <Layout>
    <div class="md:flex -mx-4">
      <div class="md:w-1/3 px-4">
        <Card title="Latest News" class="h-full">
          <LatestNews />
        </Card>
      </div>
      <div class="md:w-1/3 mt-8 md:mt-0 px-4">
        <Card title="Latest Gigs" class="h-full">
          <LatestGigs />
        </Card>
      </div>
      <div class="flex-1 mt-8 md:mt-0 px-4">
        <Card title="Voice of the Tees">
          <VoiceOfTheTees />
        </Card>

        <Card title="Latest Art" class="mt-8">
          <LatestArt />
        </Card>
      </div>
    </div>

    <Card title="About Ken Wilson" class="mt-8">
      <Intro />
    </Card>
  </Layout>
</template>

<script>
import Card from "~/components/Card.vue";
import Intro from "~/components/Intro.vue";
import LatestNews from "~/components/LatestNews.vue";
import LatestGigs from "~/components/LatestGigs.vue";
import LatestArt from "~/components/LatestArt.vue";
import VoiceOfTheTees from "~/components/VoiceOfTheTees.vue";

export default {
  components: {
    Card,
    Intro,
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
