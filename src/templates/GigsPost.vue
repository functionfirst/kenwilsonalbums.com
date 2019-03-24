<template>
  <Layout>
    <h1 class="leading-loose font-normal">{{ $page.gigsPost.title }}</h1>
  </Layout>
</template>

<page-query>
  query gigs ($path: String!) {
    gigsPost (path: $path) {
      title
    }
  }
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.gigsPost.title
    }
  }
}
</script>
