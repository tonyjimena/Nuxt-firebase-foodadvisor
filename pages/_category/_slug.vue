<template>
<div>
  <div class="container">
    <section class="section">
      <h1 class="title is-1">{{ restaurant.name }}</h1>
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <nuxt-link to="/">
              Home
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="`/${$route.params.category}`" aria-current="page">
              {{ $route.params.category }}
            </nuxt-link>
          </li>
          <li class="is-active">
            <a href="#" aria-current="page">{{ restaurant.name }}</a>
          </li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column box">
          <div class="columns">
            <div class="column">
              <img :src="restaurant.image" class="image" />
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <p>{{ restaurant.description }}</p>
            </div>
            <div class="column has-text-right">
              <div class="button">
                <span>{{ restaurant.likes }}</span>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <span class="tag">{{ restaurant.city }}</span>
            </div>
            <div class="column has-text-right">
              <span>{{ restaurant.address }}</span>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <p>Descripción:</p>
              <p>{{ restaurant.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
</template>

<script>
import api from "~/services/api"
import { db } from '~/plugins/firebase'

export default {
  async asyncData({ params }) {
    // try {
    //   const slug = params.slug
    //   //console.log(slug)
    //   const { data } = await api.getOneRestaurant(slug)
    //   //console.log(data)
    //   return { restaurant: data.shift() }
    // } catch (error) {
    //   console.log(error)
    //   return { restaurant: [] }
    // }
  },
  data() {
    return {
      restaurant: []
    }
  },
  created() {
      console.log(this.$route.params.slug)
      let restaurantsRef = db.collection('restaurants')
      let query = restaurantsRef.where('slug', '==', this.$route.params.slug).get()
        .then(snapshot => {
          if (snapshot.empty) {
            console.log('No matching documents.')
            return
          }
          snapshot.forEach(doc => {
             const res = {
              id: doc.id,
              ...doc.data()
            }
            //console.log(doc.data())
            this.restaurant = res
          })
        })
        .catch(err => {
          console.log('Error getting documents', err)
        })
  }
  }
</script>

<style scoped>
.image {
  width: 100%;
}
</style>
