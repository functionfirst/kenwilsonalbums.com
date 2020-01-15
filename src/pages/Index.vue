<template>
  <Layout>
    <div class="md:flex -mx-4">
      <div class="md:w-1/3 px-4">
        <Card title="Latest News">
          <LatestNews />
        </Card>
      </div>
      <div class="md:w-1/3 px-4">
        <Card title="Latest Gigs">
          <LatestGigs />
        </Card>
      </div>
      <div class="flex-1 px-4 mt-4 md:mt-0">
        <Card title="Voice of the Tees">
          <VoiceOfTheTees />
        </Card>
      </div>
    </div>

    <div class="md:flex -mx-4 mt-8">
      <div class="w-2/3 px-4">
        <Card title="About Ken Wilson">
          <Intro />
        </Card>
      </div>

      <div class="flex-1 px-4">
        <Card title="Latest Art">
          <LatestArt />
        </Card>
      </div>
    </div>
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
