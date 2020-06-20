<template>
  <Layout>
    <h1 class="leading-loose font-normal mb-8">
      Folk Albums and Collaborations
    </h1>

    <Albums />
  </Layout>
</template>

<script>
import Albums from "~/components/Albums";

export default {
  components: {
    Albums
  },

  metaInfo: {
    title: "Album Releases by Ken Wilson"
  }
};
</script>
