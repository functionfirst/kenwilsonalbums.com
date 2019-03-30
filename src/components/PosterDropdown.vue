<template>
  <on-click-outside :do="handleClickOutside">
    <div class="relative mb-4" @click="open = !open ">
      <div class="flex items-center justify-between bg-lighter cursor-pointer hover:border-darker p-3 rounded border border-dark shadow-inner">
        <div v-if="selected" class="w-full mr-2 flex justify-between">
          <div>
            {{ selected.size }} <small>{{ selected.dimensions }}</small>
          </div>
          <div>
            £{{ selected.price }}
          </div>
        </div>
        <div v-else>Select a size and print</div>

        <svg height="8" viewBox="0 0 12 8" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m2 0 4 3.88515625 4-3.88515625 2 2-6 6-6-6z" fill-rule="evenodd"/></svg>
      </div>

      <div v-if="open" class="absolute bg-lighter pin-l pin-r shadow-md">
        <div v-for="(option, index) in options"
        :key="index"
        :class="[selected === index ? 'font-bold' :  '']"
        class="p-3 cursor-pointer border-b border-base hover:bg-base flex justify-between"
        @click="select(index)"
        >
          <div>
            {{ option.size }} <small>{{ option.dimensions }}</small>
          </div>
          <div>
            {{ option.type }}
          </div>
          <div>
            £{{ option.price }}
          </div>
        </div>
      </div>
    </div>
  </on-click-outside>
</template>

<script>
import OnClickOutside from "~/components/OnClickOutside";

export default {
  components: {
    OnClickOutside
  },
  methods: {
    handleClickOutside() {
      if (this.open) {
        this.open = false;
      }
    },
    select(index) {
      this.selected = this.options[index];
      this.price = this.options[index].price;
      this.$emit('change', {
        name: this.options[index].name,
        price: this.options[index].price
      });
    }
  },
  data() {
    return {
      selected: null,
      open: false,
      options: [
        {
          name: 'A4 12" x 8" Poster',
          size: "A4",
          dimensions: '12" x 8"',
          type: "Poster",
          price: 15
        },
        {
          name: 'As 16" x 12" Poster',
          size: "A3",
          dimensions: '16" x 12"',
          type: "Poster",
          price: 25
        },
        {
          name: 'A3 16" x 12" Canvas',
          size: "A3",
          dimensions: '16" x 12"',
          type: "Canvas",
          price: 50
        },
        {
          name: 'A2 30" x 20" Canvas',
          size: "A2",
          dimensions: '30" x 20"',
          type: "Canvas",
          price: 85
        }
      ]
    };
  }
};
</script>
