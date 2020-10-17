<template>
    <tr>
        <th scope="row">{{ product.id }}</th>
        <td>{{ product.name }}</td>
        <td>
            <img :src="product.img_url" alt="produk" style="width: 100px">
        </td>
        <td>{{ product.description }}</td>
        <td>USD {{ product.price }}</td>
        <td>{{ product.stock }}</td>
        <td>
            <button @click="toEditProduct(product.id)" class="btn btn-outline-info btn-sm">Edit</button>
            <button @click="deleteProduct(product.id)" class="btn btn-outline-danger btn-sm">Delete</button>
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
    },
    deleteProduct (id) {
      const reConfirm = confirm('Are you sure want to delete this product ?')
      if (reConfirm) {
        this.$store.dispatch('deleteProduct', id)
          .then(({ data }) => {
            this.$store.dispatch('fetchProducts')
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
}
</script>

<style>

</style>
