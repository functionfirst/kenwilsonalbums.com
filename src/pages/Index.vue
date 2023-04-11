<template>
  <Homepage>
    <!--
    <div class="py-4 md:py-8 px-2">
      <div class="mx-auto max-w-2xl">
        <LatestGigs />
      </div>
    </div>
    -->

    <div class="py-4 md:py-8 px-2">
      <div class="mx-auto max-w-2xl">
        <div class="md:flex -mx-4">
          <div class="md:w-1/3 px-4">
            <LatestNews />
          </div>

          <div class="md:w-1/3 mt-8 md:mt-0 px-4">
            <VoiceOfTheTees />
          </div>

          <div class="md:w-1/3 mt-8 md:mt-0 px-4">
            <LatestArt />
          </div>
        </div>
      </div>
    </div>

    <div class="bg-light py-4 md:py-8 px-2">
      <div class="mx-auto max-w-2xl">
        <Intro />
      </div>
    </div>
  </Homepage>
</template>

<script>
import Intro from "~/components/Intro.vue";
import LatestNews from "~/components/LatestNews.vue";
import LatestGigs from "~/components/LatestGigs.vue";
import LatestArt from "~/components/LatestArt.vue";
import VoiceOfTheTees from "~/components/VoiceOfTheTees.vue";

export default {
  components: {
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
