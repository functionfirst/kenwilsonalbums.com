<template>
  <Layout>
    <h1 class="leading-loose font-normal">{{ $page.newsPost.title }}</h1>

    <div class="flex">
      <g-image :src="$page.newsPost.image" :alt="`News image for ${$page.newsPost.title}`" />

      <div class="md:ml-8 leading-normal max-w-md">
        <div class="content" v-html="$page.newsPost.content"></div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query news ($path: String!) {
    newsPost (path: $path) {
      title
      content
      image (width: 225, quality: 70, fit: inside)
    }
  }
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.newsPost.title
    }
  }
}
</script>
