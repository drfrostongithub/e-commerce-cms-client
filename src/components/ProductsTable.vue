<template>
  <table class="table table-striped">
      <thead>
          <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Stock</th>
              <th scope="col" style="min-width: 100px">Action</th>
          </tr>
      </thead>
      <tbody>
        <ProductsRow v-for="product in products"
        :key="product.id"
        :product="product"
        />
      </tbody>
  </table>
</template>

<script>
import ProductsRow from './ProductsRow.vue'

export default {
  name: 'ProductTable',
  props: ['products'],
  components: {
    ProductsRow
  }
}
</script>

<style>

</style>
