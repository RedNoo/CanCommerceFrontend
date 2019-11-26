<template>
  <div class="product-list">
    <h1>Product List</h1>
    <div class="row">
      <ProductListItem
        v-for="(product,index) in products.data"
        v-bind:key="index"
        :product="product"
      ></ProductListItem>
    </div>
  </div>
</template>

<script>
import ProductListItem from "@/components/ProductListItem";

const axios = require("axios");

export default {
  name: "ProductList",
  data() {
    return {
      products: []
    };
  },
  components: {
    ProductListItem
  },
  mounted() {
    axios
      .get("http://localhost:9099/product/list?page=1")
      .then(response => (this.products = response))
      .catch();
  }
};
</script>
