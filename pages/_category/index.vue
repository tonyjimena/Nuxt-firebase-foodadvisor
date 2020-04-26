<template>
  <div class="container" v-if="restaurants">
    <section class="section">
      <h1 class="title is-1">{{ $route.params.category }}</h1>
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <nuxt-link to="/">
              Home
            </nuxt-link>
          </li>
          <li class="is-active">
            <a href="#" aria-current="page">{{ $route.params.category }}</a>
          </li>
        </ul>
      </nav>
      <div class="container">
        <section class="section">
          <div class="columns">
            <RestaurantCard
              :name="restaurant.name"
              :description="restaurant.description"
              :slug="restaurant.slug"
              :category="restaurant.category"
              :likes="restaurant.likes"
              :image="restaurant.image"
              class="restaurant-card"
              v-for="(restaurant, index) in restaurants" :key="index"
            />
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import RestaurantCard from '~/components/RestaurantCard'
import api from '~/services/api'
import { db } from '~/plugins/firebase'

export default {
  components: {
    RestaurantCard,
  },
  data() {
    return {
      restaurants: []
    }
  },
  async asyncData({ params }) {
    // try {
    //   const category = params.category
    //   const { data } = await api.getRestaurantsByCategory(category)
    //   return { restaurants: data }
    // } catch (error) {
    //   console.log(error)
    //   return { restaurants: [] }
    // }
  },
  created() {
    this.getCategories(this.$route.params.category)
  },
  methods: {
    getCategories(param) {
      console.log(param)
      let restaurantsRef = db.collection('restaurants')
      let query = restaurantsRef.where('category', '==', param).get()
        .then(snapshot => {
          if (snapshot.empty) {
            console.log('No matching documents.')
            return
          }
          snapshot.forEach(doc => {
             const restaurant = {
              id: doc.id,
              ...doc.data()
            }
            this.restaurants.push(restaurant)
          })
        })
        .catch(err => {
          console.log('Error getting documents', err)
        })
    }
  }
}
</script>
<style>
.restaurant-card {
  margin: 10px 20px;
  min-width: 300px;
}
</style>
