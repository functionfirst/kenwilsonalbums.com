<template>
  <div>
    <button
      ref="el"
      @click="show = !show"
      class="bg-white flex items-center justify-between border px-4 py-3 rounded-sm w-full text-left border-grey-300 hover:border-grey-500 hover:bg-grey-100"
    >
      <slot name="label">Select...</slot>

      <ChevronDown v-show="!show" width="20" />
      <ChevronUp v-show="show" width="20" />
    </button>

    <div v-show="show" class="relative">
      <div class="absolute border border-grey-300 z-10 bg-white mt-px rounded-sm shadow-md w-full">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import ChevronDown from "~/components/icons/ChevronDown";
import ChevronUp from "~/components/icons/ChevronUp";

export default {
  components: {
    ChevronDown,
    ChevronUp
  },

  data() {
    return {
      show: false
    };
  },

  computed: {
    el() {
      return this.$refs.el;
    }
  },

  methods: {
    bindEvent() {
      document.body.addEventListener("click", this.clickOutsideEvent);
    },

    clickOutsideEvent(event) {
      if (!(this.el == event.target || this.el.contains(event.target))) {
        // console.log("click outside event", event);
        this.show = false;
      }
    },

    unbindEvent() {
      document.body.removeEventListener("click", this.clickOutsideEvent);
    }
  },

  watch: {
    show() {
      if (this.show) {
        // bind event
        this.bindEvent();
      } else {
        // unbind event
        this.unbindEvent();
      }
    }
  }
};
</script>
