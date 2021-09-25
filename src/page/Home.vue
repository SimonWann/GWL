<template>
  <div class="home">
    <div class="top-menu-area">
      <section class="logo-area">{{logo}}</section>
      <section class="nav-area">
        <ul class="nav-item-container">
          <li 
          class="nav-item"
          v-for="val in menu"
          :key="val.name"
          >{{val.text}}</li>
        </ul>
      </section>
    </div>
    <div class="content-area-middle">
      <section class="left-box">
        <content-move
        :text="introduce"
        ></content-move>
      </section>
      <section class="right-article">
        <swiper
        :slides-per-view="1.45"
        :space-between="80"
        :slidesOffsetAfter="380"
        :scrollbar="{
          draggable: true,
          hide: false,
          snapOnRelease: true
        }"
        :mousewheel="true"
        :modules="[Mousewheel]"
        >
          <swiper-slide
          v-for="(val, index) in items"
          :key="index"
          >
            <article-card-vue
            :item="val"
            class="content-box"
            ></article-card-vue>
          </swiper-slide>
        </swiper>
      </section>
    </div>
    
  </div>
</template>
<script setup>
import ArticleCardVue from "../components/ArticleCard.vue";
import ContentMove from '@/components/ContentMove.vue'
import { reactive, ref } from 'vue'
import { Scrollbar, Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css';
// import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';

  const logo = ref('HandsomeGWL')
  const menu = reactive([
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
  const items = reactive([
    {
      img: undefined,
      title: 'Ensembl',
      content: 'Cook'
    },
    {
      img: undefined,
      title: 'Ensembl',
      content: 'Cook'
    },
    {
      img: undefined,
      title: 'Ensembl',
      content: 'Cook'
    },
  ])
  const introduce = reactive([
    'Focused on '.trim(),
    'functionality,'.trim(),
    ' fueled by'.trim(), 
    'connection,'.trim(), 
    ' designed with'.trim(), 
    'purpose.'.trim()
  ])
</script>
<style lang="sass">
@import "@/assets/base.sass"

.home
  min-width: 100vw 
  min-height: 100vh
  overflow: auto
  box-sizing: border-box
  background: var(--black)
  .top-menu-area
    +setFlex
    margin: 5rem 10rem 6.25rem
    .logo-area
      +setFont(700, 1rem, #fff)
    .nav-area
      .nav-item-container
        width: 14.6875rem
        +setFlex
        list-style: none
        .nav-item
          +setFont(400, 1rem, #fff)
  .content-area-middle
    +setFlex
    .left-box
      margin-left: 10rem
    .right-article
      height: 37.125rem
      width: calc(27.5rem + 17.5rem)
      // overflow: hidden
      // .swiper-wrapper
        // display: flex
      .content-box
</style>