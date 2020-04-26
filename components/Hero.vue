<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <button  @click="$emit('onShowBannerButton')">
          ShowBanner
        </button>
        <slot name="banner">
        </slot>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    text-align: center;
}
.hero {
    height: 250px;
    align-items: stretch;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 15px auto;
}
</style>
