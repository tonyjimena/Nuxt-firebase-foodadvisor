<template>
<div>
  <Hero v-on:onShowBannerButton="showBanner">
        <BannerComponent slot="banner" :key="1" style="width: 790px" v-if="Banner"></BannerComponent>
        <Slogan slot="banner" :key="2" style="width: 790px" v-else></Slogan>
  </Hero>
  <div class="container">
    <div class="cards">
      <RestaurantCard
        v-for="(restaurant, index) in restaurants" :key="index"
        :name="restaurant.name"
        :description="restaurant.description"
        :category="restaurant.category"
        :slug="restaurant.slug"
        :likes="restaurant.likes"
        :image="restaurant.image"
        v-on:onLikeButton="sumLikes(restaurant)"
      />
    </div>
  </div>
</div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import RestaurantCard from '~/components/RestaurantCard.vue'
import Hero from '~/components/Hero.vue'
import BannerComponent from '~/components/BannerComponent.vue'
import Slogan from '~/components/Slogan.vue'
import api from '~/services/api.js'
import { db } from '~/plugins/firebase'

export default {
  components: {
    Logo,
    RestaurantCard,
    Hero,
    Slogan,
    BannerComponent
  },
  async asyncData() {
    // try {
    //   const { data } = await api.getRestaurants()
    //   return { restaurants: data }
    // } catch (error) {
    //   console.log(error)
    //   return { restaurants: [] }
    // }
  },
  created () {
    this.getDoc()
  },
  // async created() {
  //   const response = await api.getRestaurants()
  //   if(response.status == 200){
  //     this.restaurants = response.data
  //   }
  // },
  data() {
    return {
      Banner: true,
      restaurants: []
    }
  },
  methods: {
    getDoc() {
      this.restaurants = []
      const response = db.collection('restaurants').get()
      response
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            const restaurant = {
              id: doc.id,
              ...doc.data()
            }
            this.restaurants.push(restaurant)
          })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    async sumLikes(restaurant) {
      const payload = {
        id: restaurant.id,
        data: {
          likes: restaurant.likes + 1
        }
      }
      const ref = db.collection('restaurants').doc(restaurant.id)
      const response = ref.update(payload.data)
      response.then( () => {
          restaurant.likes++
          //this.getDoc()
          //this.$router.back()
      })
      .catch((error) => {
        console.log(error)
      })
      // const response = await api.putLikesSum(payload)
      // console.log(response)
      // if (response.status == 200) {
      //   restaurant.likes++
      // }
    },
    showBanner() {
      this.Banner = !this.Banner
    }
  }
}
</script>

<style>
.cards {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 15px;
}
.container {
  margin: 15 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  color: #35495e;
  letter-spacing: 1px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
