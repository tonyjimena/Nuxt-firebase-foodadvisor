<template>
  <div class="banner">
    <h2 class="title is-2">Restaurante Mediterraneo</h2>
    <div>
      <p> Entregas a domincio</p>
      <h3 class="title is-3">821 821 812</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BannerComponent'
}
</script>
<style scoped>
 .banner {
  color: black;
  background-image: url('../assets/images/banner.png');
  background-size: cover;
  height: 150px;
  width: 790px;
  padding: 2px 15px;
}
</style>
