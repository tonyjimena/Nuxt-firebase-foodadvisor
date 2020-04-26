<template>
  <div>
    <h2 class="title is-2">FoodAdvisor, tu web de restaurantes</h2>
    <div class="subcribe" v-if="!is_subscribe">
      <input v-model="email" type="text" class="input email" placeholder="email..."/>
      <button @click="subscribe" class="button is-info">Suscribirse</button>
    </div>
  </div>
</template>

<script>
import api from '~/services/api'
export default {
  name: 'Slogan',
  data () {
    return {
      email: '',
      is_subscribe: false
    }
  },
  methods: {
    async subscribe() {
      const payload = {
        email: this.email
      }
      const response = await api.postSubscribeUser(payload)
      if (response.status == 201) {
        this.is_subscribe = true
      }
    }
  }
}
</script>

<style>

</style>
