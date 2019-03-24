<template>
  <Layout>
    <h1 class="leading-loose font-normal">About Ken Wilson</h1>

    <div class="md:flex" v-for="(item, index) in About.items" :key="index">
        <div class="md:w-32">
            <h2
                v-if="item.title"
                class="leading-normal font-normal mr-12 leading-normal my-2 text-dark"
            >
                {{ item.title }}
            </h2>
        </div>
        <div>
            <p class="leading-normal my-4 max-w-sm markup" v-html="item.description">
            </p>
        </div>
    </div>
  </Layout>
</template>

<script>
import About from '~/data/About.yml'

export default {
    computed: {
    About() {
        return About
    }
    },
  metaInfo: {
    title: 'About Ken Wilson'
  }
}
</script>
