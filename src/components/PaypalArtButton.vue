<template>
  <div class="mt-8">
    <h2 class="mb-2 text-lg">To order online:</h2>

    <Dropdown class="my-4">
      <template v-slot:label>
        <template v-if="currentType">{{ currentType }}</template>
        <template v-else>Select a product</template>
      </template>

      <div
        v-for="(type, index) in types"
        :key="index"
        :class="currentType === type ? 'bg-grey-900 text-white hover:bg-grey-800' : ' hover:bg-grey-100'"
        class="border-t border-grey-200 px-4 py-3 cursor-pointer"
        @click="setType(type)"
      >{{ type }}</div>
    </Dropdown>

    <Dropdown class="my-4">
      <template v-slot:label>
        <template v-if="product">
          <div v-if="product.swatch" class="border border-grey-400 p-px rounded-full mr-2">
            <div class="m-px h-4 w-4 rounded-full" :style="`background-color: ${product.swatch}`"></div>
          </div>
          <div class="flex-1">{{ product.name }}</div>
        </template>
        <template v-else>Select an option</template>
      </template>

      <div
        class="px-4 py-3 text-danger"
        v-if="currentType === null"
      >Please select a product type first</div>
      <div
        v-else
        v-for="(option, index) in matchingProducts"
        :key="index"
        :class="currentProduct === index ? 'bg-grey-900 text-white hover:bg-grey-800' : ' hover:bg-grey-100'"
        class="border-t border-grey-200 cursor-pointer"
        @click="setProduct(index)"
      >
        <div class="flex justify-between items-center py-3 px-4">
          <div v-if="option.swatch" class="border border-grey-400 p-px rounded-full mr-2">
            <div class="m-px h-4 w-4 rounded-full" :style="`background-color: ${option.swatch}`"></div>
          </div>

          <div class="flex-1">
            {{ option.name }}
            <small v-if="option.size" class="block mt-1">Size: {{ option.size }}</small>
          </div>

          <div class="font-bold">£{{ option.price }}</div>
        </div>
      </div>
    </Dropdown>

    <Dropdown class="my-4" v-if="currentType === types.TSHIRT">
      <template v-slot:label>
        <template v-if="size">{{ size }}</template>
        <template v-else>Select a size</template>
      </template>

      <div
        v-for="(size, index) in sizes"
        :key="index"
        :class="currentSize === index ? 'bg-grey-900 text-white hover:bg-grey-800' : ' hover:bg-grey-100'"
        class="border-t border-grey-200 cursor-pointer"
        @click="setSize(index)"
      >
        <div class="flex justify-between items-center py-3 px-4">{{ size }}</div>
      </div>
    </Dropdown>

    <Dropdown class="my-4">
      <template v-slot:label>
        <template v-if="shipping">{{ shipping.title }}</template>
        <template v-else>Select delivery</template>
      </template>

      <div
        class="px-4 py-3 text-danger"
        v-if="currentType === null"
      >Please select a product type first</div>
      <div
        v-else
        v-for="(post, index) in shippingOptions"
        :key="index"
        :class="currentShipping === index ? 'bg-grey-900 text-white hover:bg-grey-800' : ' hover:bg-grey-100'"
        class="border-t border-grey-200 cursor-pointer"
        @click="setShipping(index)"
      >
        <div class="flex justify-between items-center py-3 px-4">
          <div class="flex-1">{{ post.title }}</div>
          <div class="ml-2">{{ formatPrice(post.price) }}</div>
        </div>
      </div>
    </Dropdown>

    <p
      class="text-xs mb-4 text-danger"
      v-if="currentType === types.CANVAS"
    >Please note: Canvas sizes are approximate as each frame is custom built to fit the picture.</p>

    <div class="flex items-center justify-between my-4 border-t border-grey-500 pt-4">
      Subtotal
      <span v-show="product" class="font-bold">{{ formatPrice(price) }}</span>
      <span v-show="!product" class="text-sm">Please select</span>
    </div>

    <div class="flex items-center justify-between my-4">
      Shipping
      <span v-show="shipping" class="font-bold">{{ formatPrice(shippingPrice) }}</span>
      <span v-show="!shipping" class="text-sm">Please select</span>
    </div>

    <div class="flex my-4 justify-between border-t border-b border-grey-500 py-4 text-2xl">
      Total Price
      <span class="font-bold" v-show="price && shipping">{{ formatPrice(totalPrice) }}</span>
      <span class="font-bold" v-show="!price || !shipping">---</span>
    </div>

    <p v-if="error" class="my-4 text-sm text-danger font-bold">{{ error }}</p>

    <form ref="paypal" @submit.prevent="buy">
      <button
        class="paypal w-full block rounded py-3 px-6 no-underline items-center flex justify-center"
      >
        Pay with
        <img
          class="ml-2 h-5"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTAwIDMyIiB4bWxucz0iaHR0cDomI3gyRjsmI3gyRjt3d3cudzMub3JnJiN4MkY7MjAwMCYjeDJGO3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSAxMiA0LjkxNyBMIDQuMiA0LjkxNyBDIDMuNyA0LjkxNyAzLjIgNS4zMTcgMy4xIDUuODE3IEwgMCAyNS44MTcgQyAtMC4xIDI2LjIxNyAwLjIgMjYuNTE3IDAuNiAyNi41MTcgTCA0LjMgMjYuNTE3IEMgNC44IDI2LjUxNyA1LjMgMjYuMTE3IDUuNCAyNS42MTcgTCA2LjIgMjAuMjE3IEMgNi4zIDE5LjcxNyA2LjcgMTkuMzE3IDcuMyAxOS4zMTcgTCA5LjggMTkuMzE3IEMgMTQuOSAxOS4zMTcgMTcuOSAxNi44MTcgMTguNyAxMS45MTcgQyAxOSA5LjgxNyAxOC43IDguMTE3IDE3LjcgNi45MTcgQyAxNi42IDUuNjE3IDE0LjYgNC45MTcgMTIgNC45MTcgWiBNIDEyLjkgMTIuMjE3IEMgMTIuNSAxNS4wMTcgMTAuMyAxNS4wMTcgOC4zIDE1LjAxNyBMIDcuMSAxNS4wMTcgTCA3LjkgOS44MTcgQyA3LjkgOS41MTcgOC4yIDkuMzE3IDguNSA5LjMxNyBMIDkgOS4zMTcgQyAxMC40IDkuMzE3IDExLjcgOS4zMTcgMTIuNCAxMC4xMTcgQyAxMi45IDEwLjUxNyAxMy4xIDExLjIxNyAxMi45IDEyLjIxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSAzNS4yIDEyLjExNyBMIDMxLjUgMTIuMTE3IEMgMzEuMiAxMi4xMTcgMzAuOSAxMi4zMTcgMzAuOSAxMi42MTcgTCAzMC43IDEzLjYxNyBMIDMwLjQgMTMuMjE3IEMgMjkuNiAxMi4wMTcgMjcuOCAxMS42MTcgMjYgMTEuNjE3IEMgMjEuOSAxMS42MTcgMTguNCAxNC43MTcgMTcuNyAxOS4xMTcgQyAxNy4zIDIxLjMxNyAxNy44IDIzLjQxNyAxOS4xIDI0LjgxNyBDIDIwLjIgMjYuMTE3IDIxLjkgMjYuNzE3IDIzLjggMjYuNzE3IEMgMjcuMSAyNi43MTcgMjkgMjQuNjE3IDI5IDI0LjYxNyBMIDI4LjggMjUuNjE3IEMgMjguNyAyNi4wMTcgMjkgMjYuNDE3IDI5LjQgMjYuNDE3IEwgMzIuOCAyNi40MTcgQyAzMy4zIDI2LjQxNyAzMy44IDI2LjAxNyAzMy45IDI1LjUxNyBMIDM1LjkgMTIuNzE3IEMgMzYgMTIuNTE3IDM1LjYgMTIuMTE3IDM1LjIgMTIuMTE3IFogTSAzMC4xIDE5LjMxNyBDIDI5LjcgMjEuNDE3IDI4LjEgMjIuOTE3IDI1LjkgMjIuOTE3IEMgMjQuOCAyMi45MTcgMjQgMjIuNjE3IDIzLjQgMjEuOTE3IEMgMjIuOCAyMS4yMTcgMjIuNiAyMC4zMTcgMjIuOCAxOS4zMTcgQyAyMy4xIDE3LjIxNyAyNC45IDE1LjcxNyAyNyAxNS43MTcgQyAyOC4xIDE1LjcxNyAyOC45IDE2LjExNyAyOS41IDE2LjcxNyBDIDMwIDE3LjQxNyAzMC4yIDE4LjMxNyAzMC4xIDE5LjMxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSA1NS4xIDEyLjExNyBMIDUxLjQgMTIuMTE3IEMgNTEgMTIuMTE3IDUwLjcgMTIuMzE3IDUwLjUgMTIuNjE3IEwgNDUuMyAyMC4yMTcgTCA0My4xIDEyLjkxNyBDIDQzIDEyLjQxNyA0Mi41IDEyLjExNyA0Mi4xIDEyLjExNyBMIDM4LjQgMTIuMTE3IEMgMzggMTIuMTE3IDM3LjYgMTIuNTE3IDM3LjggMTMuMDE3IEwgNDEuOSAyNS4xMTcgTCAzOCAzMC41MTcgQyAzNy43IDMwLjkxNyAzOCAzMS41MTcgMzguNSAzMS41MTcgTCA0Mi4yIDMxLjUxNyBDIDQyLjYgMzEuNTE3IDQyLjkgMzEuMzE3IDQzLjEgMzEuMDE3IEwgNTUuNiAxMy4wMTcgQyA1NS45IDEyLjcxNyA1NS42IDEyLjExNyA1NS4xIDEyLjExNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny41IDQuOTE3IEwgNTkuNyA0LjkxNyBDIDU5LjIgNC45MTcgNTguNyA1LjMxNyA1OC42IDUuODE3IEwgNTUuNSAyNS43MTcgQyA1NS40IDI2LjExNyA1NS43IDI2LjQxNyA1Ni4xIDI2LjQxNyBMIDYwLjEgMjYuNDE3IEMgNjAuNSAyNi40MTcgNjAuOCAyNi4xMTcgNjAuOCAyNS44MTcgTCA2MS43IDIwLjExNyBDIDYxLjggMTkuNjE3IDYyLjIgMTkuMjE3IDYyLjggMTkuMjE3IEwgNjUuMyAxOS4yMTcgQyA3MC40IDE5LjIxNyA3My40IDE2LjcxNyA3NC4yIDExLjgxNyBDIDc0LjUgOS43MTcgNzQuMiA4LjAxNyA3My4yIDYuODE3IEMgNzIgNS42MTcgNzAuMSA0LjkxNyA2Ny41IDQuOTE3IFogTSA2OC40IDEyLjIxNyBDIDY4IDE1LjAxNyA2NS44IDE1LjAxNyA2My44IDE1LjAxNyBMIDYyLjYgMTUuMDE3IEwgNjMuNCA5LjgxNyBDIDYzLjQgOS41MTcgNjMuNyA5LjMxNyA2NCA5LjMxNyBMIDY0LjUgOS4zMTcgQyA2NS45IDkuMzE3IDY3LjIgOS4zMTcgNjcuOSAxMC4xMTcgQyA2OC40IDEwLjUxNyA2OC41IDExLjIxNyA2OC40IDEyLjIxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC43IDEyLjExNyBMIDg3IDEyLjExNyBDIDg2LjcgMTIuMTE3IDg2LjQgMTIuMzE3IDg2LjQgMTIuNjE3IEwgODYuMiAxMy42MTcgTCA4NS45IDEzLjIxNyBDIDg1LjEgMTIuMDE3IDgzLjMgMTEuNjE3IDgxLjUgMTEuNjE3IEMgNzcuNCAxMS42MTcgNzMuOSAxNC43MTcgNzMuMiAxOS4xMTcgQyA3Mi44IDIxLjMxNyA3My4zIDIzLjQxNyA3NC42IDI0LjgxNyBDIDc1LjcgMjYuMTE3IDc3LjQgMjYuNzE3IDc5LjMgMjYuNzE3IEMgODIuNiAyNi43MTcgODQuNSAyNC42MTcgODQuNSAyNC42MTcgTCA4NC4zIDI1LjYxNyBDIDg0LjIgMjYuMDE3IDg0LjUgMjYuNDE3IDg0LjkgMjYuNDE3IEwgODguMyAyNi40MTcgQyA4OC44IDI2LjQxNyA4OS4zIDI2LjAxNyA4OS40IDI1LjUxNyBMIDkxLjQgMTIuNzE3IEMgOTEuNCAxMi41MTcgOTEuMSAxMi4xMTcgOTAuNyAxMi4xMTcgWiBNIDg1LjUgMTkuMzE3IEMgODUuMSAyMS40MTcgODMuNSAyMi45MTcgODEuMyAyMi45MTcgQyA4MC4yIDIyLjkxNyA3OS40IDIyLjYxNyA3OC44IDIxLjkxNyBDIDc4LjIgMjEuMjE3IDc4IDIwLjMxNyA3OC4yIDE5LjMxNyBDIDc4LjUgMTcuMjE3IDgwLjMgMTUuNzE3IDgyLjQgMTUuNzE3IEMgODMuNSAxNS43MTcgODQuMyAxNi4xMTcgODQuOSAxNi43MTcgQyA4NS41IDE3LjQxNyA4NS43IDE4LjMxNyA4NS41IDE5LjMxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5NS4xIDUuNDE3IEwgOTEuOSAyNS43MTcgQyA5MS44IDI2LjExNyA5Mi4xIDI2LjQxNyA5Mi41IDI2LjQxNyBMIDk1LjcgMjYuNDE3IEMgOTYuMiAyNi40MTcgOTYuNyAyNi4wMTcgOTYuOCAyNS41MTcgTCAxMDAgNS42MTcgQyAxMDAuMSA1LjIxNyA5OS44IDQuOTE3IDk5LjQgNC45MTcgTCA5NS44IDQuOTE3IEMgOTUuNCA0LjkxNyA5NS4yIDUuMTE3IDk1LjEgNS40MTcgWiI+PC9wYXRoPjwvc3ZnPg=="
          alt="paypal"
        />
      </button>
    </form>
  </div>
</template>

<script>
import Dropdown from "~/components/Dropdown";
import postage from "~/data/postage";

export default {
  props: {
    products: {
      type: Array,
      required: true
    },

    types: {
      type: Object,
      required: true
    },

    item: {
      type: Object,
      required: true
    }
  },

  components: {
    Dropdown
  },

  data() {
    return {
      sizes: [
        "S - Small",
        "M - Medium",
        "L - Large",
        "XL - Extra Large",
        "XXL - Extra Extra Large"
      ],
      selectType: false,
      selectProduct: false,
      selectShipping: false,
      business: "wilsonfamily@ntlworld.com",
      currencyCode: "GBP",
      currentSize: null,
      currentType: null,
      currentProduct: null,
      currentShipping: null,
      error: false,
      postage
    };
  },

  computed: {
    paypalUrl() {
      return `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=${this.business}&item_name=${this.name}&amount=${this.price}&currency_code=${this.currencyCode}&shipping=${this.shippingPrice}`;
    },

    name() {
      if (!this.product) return;
      if (this.size) {
        return `${this.item.title}. Product: ${this.product.name}. Size: ${this.size}`;
      }
      return `${this.item.title}. Product: ${this.product.name}`;
    },

    product() {
      return this.matchingProducts[this.currentProduct];
    },

    size() {
      return this.currentSize !== null && this.sizes[this.currentSize];
    },

    matchingProducts() {
      return this.products.filter(item => item.type === this.currentType);
    },

    price() {
      return this.product ? this.product.price : null;
    },

    shipping() {
      if (this.currentShipping !== null) {
        return this.shippingOptions[this.currentShipping];
      }
    },

    shippingPrice() {
      return this.shipping && this.shipping.price;
    },

    totalPrice() {
      return this.price && this.shipping && this.shipping.price + this.price;
    },

    shippingOptions() {
      return this.postage[this.currentType];
    }
  },

  methods: {
    buy() {
      if (this.currentType === null) {
        this.error = "Please select a product type.";
        return false;
      }

      if (this.currentProduct === null) {
        this.error = "Please select a product option.";
        return false;
      }

      if (this.currentType === this.types.TSHIRT && this.currentSize === null) {
        this.error = "Please select a T-shirt size";
        return false;
      }

      if (this.currentShipping === null) {
        this.error = "Please select a delivery option";
        return false;
      }

      window.location.href = this.paypalUrl;
    },

    formatPrice(value) {
      let val = (value / 1).toFixed(2);
      val = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      return `£${val}`;
    },

    setType(type) {
      this.currentType = type;
    },

    setProduct(index) {
      this.currentProduct = index;
    },

    setShipping(index) {
      this.currentShipping = index;
    },

    setSize(index) {
      this.currentSize = index;
    }
  },

  watch: {
    currentType() {
      this.currentProduct = null;
      this.currentShipping = null;
      this.currentSize = null;
      this.error = null;
    },

    currentProduct() {
      this.error = null;
    },

    currentShipping() {
      this.error = null;
    }
  }
};
</script>

