<template>
  <div class="home">
    <section class="left-box"></section>
    <section class="right-article">
      <article-card-vue></article-card-vue>
    </section>
  </div>
</template>
<script setup>
import ArticleCardVue from "../components/ArticleCard.vue";


</script>
<style lang="sass">
.home
  width: 100vw 
  height: 100vh
  box-sizing: border-box
  background: var(--black)
  =setFont($weight, $size, $color)
    font: $weight $size Gilroy
    color: $color
</style>