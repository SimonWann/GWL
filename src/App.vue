<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  import { ref, reactive } from 'vue'
  const title = ref('HandsomeGWL')
  const menu = ref([
    {
      name: 'work',
      text: 'Work'
    },
    {
      name: 'agency',
      text: 'Agency'
    },
    {
      name: 'contact',
      text: 'Contact'
    },
  ])
</script>

<template>
  <router-view></router-view>
</template>

<style lang="sass">
#app
  

</style>
