<template>
   <div class="card" style="width:400px;">
    <div class="card-image">
      <figure class="image">
        <img :src="image" alt="Pizza Restaurant"/>
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4 restaurant-name">
            {{ name }}
          </p>
          <div class="columns">
            <div class="column">
              <span class="is-category tag">
                <nuxt-link :to="category">
                {{ category }}
                </nuxt-link>
              </span>
            </div>
            <div class="column has-text-right">
              <button class="button is-info" v-on:click="sumLikes">
                {{ likes }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        {{ description}}
        <a v-bind:href="`${category}/${slug}`">more info</a>.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RestaurantCard',
  props: {
    name: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    category: {
      type: String,
      default: ''
    },
    slug: {
      type: String,
      default: ''
    },
    likes: {
      type: Number,
      default: 0
    },
    image: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  methods: {
    sumLikes() {
      this.$emit('onLikeButton')
      //this.likes++
    }
  }
}
</script>

<style>
.card{
  margin: 15px;
  width: 33% !important;
}
.media-content {
    overflow: hidden;
}
</style>
