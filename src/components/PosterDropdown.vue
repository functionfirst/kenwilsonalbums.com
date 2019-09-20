<template>
  <div class="bg-white rounded shadow-md mb-4">
    <div v-for="(option, index) in posters"
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
      return this.posters[this.selected];
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

  props: {
    posters: {
      default: false,
      required: true,
      type: Array
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
      selected: null
    };
  }
};
</script>
