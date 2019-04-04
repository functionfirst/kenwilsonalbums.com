<template>
  <div class="bg-white rounded shadow-md mb-4">
    <div v-for="(option, index) in options"
    :key="index"
    :class="[selected === index ? 'font-bold' :  '']"
    class="p-3 cursor-pointer border-b border-base hover:bg-light flex justify-between"
    @click="selectProduct(index)"
    >
      <input type="radio" id="" :checked="selected === index">
      <div class="flex-1 ml-3">
        {{ option.size }} <small>{{ option.dimensions }}</small>
      </div>
      <div class="flex-1 mx-2">
        {{ option.type }}
      </div>
      <div>
        £{{ option.price }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    current() {
      return this.options[this.selected];
    },
    price() {
      return this.current.price;
    },
    product() {
      if (!this.current) return;
      return {
        name: this.current.name,
        price: this.current.price,
        type: this.current.type
      }
    }
  },
  methods: {
    selectProduct(index) {
      this.selected = index;
      this.$emit('change', this.product);
    }
  },
  data() {
    return {
      selected: null,
      options: [
        {
          name: 'Poster A4 12in x 8in',
          size: "A4",
          dimensions: '12" x 8"',
          type: "Poster",
          price: 15
        },
        {
          name: 'Poster A3 16in x 12in',
          size: "A3",
          dimensions: '16" x 12"',
          type: "Poster",
          price: 25
        },
        {
          name: 'Canvas A3 16in x 12in',
          size: "A3",
          dimensions: '16" x 12"',
          type: "Canvas",
          price: 50
        },
        {
          name: 'Canvas A2 30in x 20in',
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
