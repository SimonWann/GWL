<template>
  <div class="move-introduce-container">
    <article
    :class="{
      'move-sentence': true,
      'move-sentence-show': isTextShow
    }"
    :style="{
      position: 'relative',
      zIndex: index + 1,
      transition: `all ${animateTime}s ease-in-out ${index * 0.1}s`
    }"
    v-for="(val, index) in text"
    :key="val"
    >
      <span
      class="text-black-word"
      :style="{
        transition: `all ${animateTime}s ease-in-out ${index * 0.1}s`
      }"
      >{{val}}</span>
      <div 
      class="text-black-wrap"
      :style="{
        position: 'relative',
        zIndex: index + 2,
        transition: `all ${animateTime}s ease-in-out ${index * 0.1}s`
      }"
      ></div>
    </article>
  </div>
</template>
<script setup>
  import {ref, computed, defineProps, onMounted} from 'vue'
  const props = defineProps({
    text: {
      Type: Array,
      default: function() {
        return []
      }
    }
  })
  let animateTime = ref(0.7)
  let isTextShow = ref(false)
  onMounted(() => {
    isTextShow.value = true
  })
</script>
<style lang="sass">
@import '@/assets/base.sass' 

.move-introduce-container
  .move-sentence
    +setFont(400, 2.5rem, #fff)
    height: var(--text-height)
    transform: translateY(var(--text-height))
    .text-black-word
      display: inline-block
      position: relative
      top: 0
    .text-black-wrap
      height: var(--text-height)
      background: var(--black)
      top: calc(var(--text-height) * -1)
  .move-sentence-show
    .text-black-word
      top: calc(var(--text-height) * -1)
</style>