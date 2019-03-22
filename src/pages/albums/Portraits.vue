<template>
  <Layout>
    <breadcrumb :breadcrumb="breadcrumb" />

    <div class="flex items-start">
      <g-image src="/images/portraits.jpg" />

        <div class="ml-8 leading-normal max-w-md">
            <h2>Portraits</h2>

            <p class="my-4 text-sm italic">
                Recorded at Shoebox Studios, Newcastle.
            </p>

            <p class="my-4">
                This my second 'solo' album is again a mix of Traditional and contemory songs!
                I have dedicated the album to my three grandsons Alex, Ethan and Jack, in the
                hope that one day they will also take up the songs and enjoy singing them as
                much as I do. Ken.
            </p>

            <p>
                <a href="#" class="inline-block rounded-full text-darker border border-darker py-3 px-6 no-underline hover:bg-darker hover:text-lighter">Buy now</a>
            </p>
        </div>
    </div>
  </Layout>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb'

export default {
  components: {
    Breadcrumb
  },
  data () {
    return {
      breadcrumb: [{
        url: '/',
        text: 'Home'
      },{
        url: '/albums/',
        text: 'Albums'
      }]
    }
  }
}
</script>
