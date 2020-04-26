<template>
  <div>
    <Header/>
    <nuxt />
  </div>
</template>

<script>
import Header from '~/layouts/header'

export default {
  name: 'default',
  components: {
    Header
  }
}

</script>

<style>

</style>
