<template>
  <Layout>
    <div class="md:flex -mx-4">
      <div class="md:w-2/5 px-4">
        <LatestNews />
      </div>
      <div class="md:w-1/5 px-4 mt-12 md:mt-0">
        <LatestGigs/>
      </div>
      <div class="md:w-2/5 px-4 mt-12 md:mt-0">
        <router-link
          to="voice-of-the-tees"
          class="block relative no-underline hover:opacity-75 rounded overflow-hidden shadow-lg mb-24"
        >
          
          <g-image
            src="~/images/voiceofthetees.jpg"
            width="350"
            alt="Drawing of Vin Garbutt interposed with the Tees Transporter Bridge"
            class="block w-full"
          />
          <div class="rounded-b text-lighter p-3 bg-darker opacity-75">
            <h3 class="mb-2 font-medium font-serif">Voice of the Tees</h3>
            <p class="leading-normal">
              A limited edition print celebrating two icons of Teesside <em>Vin Garbutt</em> and the <em>Transporter Bridge</em>.     
            </p>
            <p class="mt-4 text-lighter">
              Learn More &rarr;
            </p>
          </div>
        </router-link>

        <LatestArt/>
      </div>
    </div>
  </Layout>
</template>

<script>
import LatestNews from '~/components/LatestNews.vue';
import LatestGigs from '~/components/LatestGigs.vue'
import LatestArt from '~/components/LatestArt.vue'

export default {
  components: {
    LatestNews,
    LatestGigs,
    LatestArt
  },
  metaInfo: {
    title: 'Ken Wilson Folk Singer and Artist'
  }
}
</script>
