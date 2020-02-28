<template>
  <Layout>
    <h1 class="leading-loose font-normal">Art</h1>

    <div class="md:flex justify-between items-center">
      <art-filter class="mb-4" />

      <div class="flex items-center justify-between">
        <span v-if="$page.allArtPost.pageInfo.totalPages > 1" class="text-sm">Select a page:</span>
        <Pager
          :info="$page.allArtPost.pageInfo"
          :show-navigation="false"
          active-link-class="font-bold border-darker"
          link-class="block border border-dark ml-1 py-2 px-3 no-underline hover:border-darker hover:text-darker"
          class="flex ml-2 pagination"
        />
      </div>
    </div>

    <Art :items="$page.allArtPost.edges" />
  </Layout>
</template>

<page-query>
query Art ($page: Int) {
  allArtPost(perPage: 12, page: $page, sortBy: "date", order: DESC) @paginate {
    pageInfo {
      totalPages,
      currentPage
    }
    edges {
      node {
        id
        slug
        image (width: 425, height: 425, quality: 60, fit: cover)
        title
      }
    }
  }
}
</page-query>

<script>
import Art from "~/components/Art";
import { Pager } from "gridsome";
import ArtFilter from "~/components/ArtFilter";

export default {
  components: {
    Art,
    ArtFilter,
    Pager
  },
  metaInfo: {
    title: "Pencil Art and Portraits by Ken Wilson"
  }
};
</script>
