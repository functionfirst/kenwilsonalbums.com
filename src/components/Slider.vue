<template>
  <div>
    <div class="overflow-hidden relative">
      <div
        class="absolute text-white bg-darker p-3 pin-r pin-t"
      >
      {{ selected + 1 }}/{{ count +1 }}
      </div>

      <div
        class="flex w-full"
        :style="offset"
      >
        <!-- <g-image
          v-for="(image, index) in images"
          :key="index"
          :src="image"
          :width="`${width}`"
        /> -->
        <g-image
          class="w-full"
          src="~/images/voiceofthetees.jpg"
          width="600"
        />
        <g-image
          class="w-full"
          src="~/images/voiceofthetees_framed.jpg"
          width="600"
        />
      </div>
    </div>

    <nav class="flex justify-between items-center">
      <button
        class="flex-1 text-left p-2 group"
        :class="selected === 0 ? 'text-dark pointer-events-none' : ''"
        @click="dec"
      >
        &larr; prev
      </button>
<!--     
      <div class="flex">
        <div
          v-for="(b, index) in images"
          :key="index"
          class="cursor-pointer rounded-full h-3 w-3 border border-dark m-1 hover:bg-darker hover:border-darker"
          :class="index === selected ? 'bg-dark' : 'bg-light'"
          @click="selected = index"
        />
      </div> -->

      <button
        class="flex-1 text-right p-2 group flex justify-end hover:text-dark"
        :class="selected === count ? 'text-dark pointer-events-none' : ''"
        @click="inc"
      >
        next &rarr;
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      default: () => [],
      required: true,
      type: Array
    }
  },

  data () {
    return {
      selected: 0
    }
  },

  computed: {
    offset () {
      return {
        marginLeft: `-${this.selected * 100 }%`,
        transition: '.3s margin ease-in-out'
      }
    },
    count () {
      return this.images.length - 1
    },

    width () {
      return this.$attrs.width ? this.$attrs.width : 600
    }
  },

  methods: {
    dec () {
      if (this.selected !== 0) {
        this.selected = this.selected - 1
      } else {
        this.selected = this.count
      }
    },

    inc () {
      if (this.selected !== this.count) {
        this.selected = this.selected + 1
      } else {
        this.selected = 0
      }
    }
  }
}
</script>
