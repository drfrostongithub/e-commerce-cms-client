<template>
    <div>
        <h1>{{ aboutMessage }}</h1>
        <button @click="changeMessage">Change</button>
    </div>
</template>

<script>

export default {
  name: 'ChangeButton',
  props: ['aboutMessage'],
  methods: {
    changeMessage () {
      this.$emit('changeMessage', 'terserah')
    }
  }
}
</script>

<style>

</style>
