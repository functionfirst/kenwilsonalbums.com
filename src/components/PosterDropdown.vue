<template>
  <div>
    <div class="bg-white rounded shadow-md mb-4">
      <div
        v-for="(type, index) in types"
        :key="index"
        :class="[currentType === type ? 'font-bold' :  '']"
        class="p-3 cursor-pointer border-b border-base hover:bg-light flex justify-between"
        @click="selectType(type)"
      >
        <input type="radio" id :checked="currentType === type" />

        <div class="flex-1 mx-2">{{ type }}</div>
      </div>
    </div>

    <div v-if="currentType">
      <p class="leading-normal text-lg font-normal mb-2">Select an option:</p>

      <div class="bg-white rounded shadow-md mb-4">
        <div
          v-for="(option, index) in products"
          :key="index"
          :class="[selected === index ? 'font-bold' :  '']"
          class="p-3 cursor-pointer border-b border-base hover:bg-light flex items-center justify-between"
          @click="selectProduct(index)"
        >
          <input type="radio" id :checked="selected === index" />

          <div class="flex-1 ml-3">
            {{ option.name }}
            <small class="block mt-1">Size: {{ option.dimensions }}</small>
          </div>

          <!-- <div class="flex-1 ml-3">
            {{ option.size }}
            <small>{{ option.dimensions }}</small>
          </div>-->

          <div>£{{ option.price }}</div>
        </div>
      </div>
    </div>

    <p
      class="text-xs mb-4 text-danger"
      v-if="currentType === types.CANVAS"
    >Please note: Canvas sizes are approximate as each frame is custom built to fit the picture.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentType: null,
      selected: null
    };
  },

  props: {
    posters: {
      type: Array,
      required: true
    },

    types: {
      type: Object,
      required: true
    }
  },

  computed: {
    current() {
      return this.products[this.selected];
    },

    products() {
      return this.posters.filter(item => item.type === this.currentType);
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
      };
    }
  },

  methods: {
    selectType(index) {
      this.currentType = index;
      this.selected = null;
    },

    selectProduct(index) {
      this.selected = index;
    }
  },

  watch: {
    selected() {
      this.$emit("change", this.product);
    }
  }
};
</script>
