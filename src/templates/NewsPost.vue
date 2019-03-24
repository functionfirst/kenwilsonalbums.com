<template>
  <Layout>
    <Header/>
    <div class="article">
      <div class="meta">
        <h1>{{ $page.newsPost.title }}</h1>
        <span>{{ $page.newsPost.date }}</span>
      </div>
      <div class="article__content" v-html="$page.newsPost.content" />
    </div>
    <Footer/>
  </Layout>
</template>

<script>
  import Header from '~/components/Header.vue';
  import Footer from '~/components/Footer.vue';

  export default {
    components: {
      Header,
      Footer
    },
    metaInfo () {
      return {
        title: this.$page.newsPost.title
      }
    }
  }
</script>

<page-query>
  query NewsPost ($path: String!) {
    newsPost (path: $path) {
      title
      date (format: "DD MMMM YYYY")
      content
    }
  }
</page-query>
