<template>
  <div class="article-card">
    <div class="article-card-top">

    </div>
    <div class="article-bottom">
      <h3 class="article-title">
        {{item.title}}
      </h3>
      <p class="article-context">
        {{item.content}}
      </p>
    </div>
  </div>
</template>
<script setup>
  import { defineProps, ref, reactive, toRefs, computed } from 'vue'
  const props = defineProps({
    item: Object
  })
</script>
<style lang="sass">
@import "@/assets/base.sass"

.article-card
  .article-card-top
    box-sizing: border-box
    width: 27.4375rem
    height: 31.9375rem
    background: var(--gray)
    
  .article-bottom
    .article-title
      margin-top: 2rem
      +setFont(700, 1.375rem, var(--gray-text))
      user-select: none
    .article-context
      margin-top: 0.5rem
      user-select: none
      +setFont(400, 0.875rem, var(--gray-text))
</style>