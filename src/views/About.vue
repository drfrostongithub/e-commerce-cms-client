<template>
  <div>
    <ChangeButton :aboutMessage="message" @changeMessage="changeMessage"/>
  </div>
</template>

<script>
import ChangeButton from '../components/ChangeButton.vue'
export default {
  name: 'About',
  data () {
    return {
      message: 'Hello'
    }
  },
  components: {
    ChangeButton
  },
  methods: {
    changeMessage (message) {
      this.message = message
    }
  }
}
</script>

<style>

</style>
