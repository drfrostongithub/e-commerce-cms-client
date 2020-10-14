<template>
    <tr>
        <th scope="row">{{ product.id }}</th>
        <td>{{ product.name }}</td>
        <td>
            <img :src="product.img_url" alt="produk" style="width: 100px">
        </td>
        <td>{{ product.description }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.stock }}</td>
        <td>
            <button @click="toEditProduct(product.id)" class="btn btn-outline-info btn-sm">Edit</button>
        </td>
    </tr>
</template>

<script>
export default {
  name: 'ProductsRow',
  props: ['product'],
  methods: {
    toEditProduct (id) {
      this.$router.push({ name: 'EditProduct', params: { id } })
    }
  }
}
</script>

<style>

</style>
