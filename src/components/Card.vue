<template>
  <div class="bg-white shadow p-8 h-full">
    <h2 v-if="title" class="font-thin border-b mb-4 pb-4">{{ title}}</h2>

    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
      required: false
    }
  }
};
</script>