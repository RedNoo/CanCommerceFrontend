<template>
  <div class="product-list">
    <h1>Product List</h1>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "ProductList",
  data() {
    return {
      products: []
    };
  },
  mounted() {
    axios
      .get("http://localhost:9099/product/list?page=1")
      .then(response => (this.products = response))
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
};
</script>
