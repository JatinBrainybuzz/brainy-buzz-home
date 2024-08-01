<template>
  <section class="tp-product-arrival-area ">
    <div class="container">
      <div class="flex flex-row items-end">
        <div class="xl:col-span-5 sm:col-span-6">
          <div class="text-sm ">
            <h3 class="relative text-4xl z-[1] text-black">
              {{heading}}
              <FrontendProductSvgSectionLine />
            </h3>
          </div>
        </div>
      </div>
      <div>
        <Swiper :slidesPerView="4" :spaceBetween="20" 
            :pagination="{
              clickable: true,
            }" 
              :autoplay="Auto"
              :breakpoints="{
                '1200': {
                  slidesPerView: 4,
                },
                '992': {
                  slidesPerView: 3,
                },
                '768': {
                  slidesPerView: 2,
                },
                '576': {
                  slidesPerView: 2,
                },
                '0': {
                  slidesPerView: 1,
                },
              }" :modules="modules" class="tp-product-arrival-active swiper-container">
          <SwiperSlide v-for="(item, i) in products" :key="i">
            <FrontendTheme1Card :item="item" />
          </SwiperSlide>
        </Swiper>
        <!-- <grid-layout :layout.sync="layout" :col-num="12" :row-height="30" :is-draggable="true" :is-resizable="true"
          :is-mirrored="false" :vertical-compact="true" :margin="[10, 10]" :use-css-transforms="true">

          <grid-item v-for="item in layout" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="item.i">
            {{item.i}}
          </grid-item>
        </grid-layout> -->
      </div>
    </div>
  </section>
</template>

<script setup>
  import {
    Swiper,
    SwiperSlide
  } from "swiper/vue";
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import {
    Autoplay,
    Pagination,
  } from "swiper/modules";
  // import GridLayout from 'vue3-grid-layout-next';
  const props = defineProps({
    products: Array,
    heading: String,
    autoplay: Boolean
  })
  const modules = props.autoplay ? [Autoplay, Pagination] : [Pagination]
  
  const Auto = props.autoplay ? {
                delay: 2500,
                disableOnInteraction: true,
              } : false

  const data = {
      layout: [{
          "x": 0,
          "y": 0,
          "w": 2,
          "h": 2,
          "i": "0"
        },
        {
          "x": 2,
          "y": 0,
          "w": 2,
          "h": 4,
          "i": "1"
        },
        {
          "x": 4,
          "y": 0,
          "w": 2,
          "h": 5,
          "i": "2"
        },
        {
          "x": 6,
          "y": 0,
          "w": 2,
          "h": 3,
          "i": "3"
        },
        {
          "x": 8,
          "y": 0,
          "w": 2,
          "h": 3,
          "i": "4"
        },
        {
          "x": 10,
          "y": 0,
          "w": 2,
          "h": 3,
          "i": "5"
        },
        {
          "x": 0,
          "y": 5,
          "w": 2,
          "h": 5,
          "i": "6"
        },
        {
          "x": 2,
          "y": 5,
          "w": 2,
          "h": 5,
          "i": "7"
        },
        {
          "x": 4,
          "y": 5,
          "w": 2,
          "h": 5,
          "i": "8"
        },
        {
          "x": 6,
          "y": 3,
          "w": 2,
          "h": 4,
          "i": "9"
        },
        {
          "x": 8,
          "y": 4,
          "w": 2,
          "h": 4,
          "i": "10"
        },
        {
          "x": 10,
          "y": 4,
          "w": 2,
          "h": 4,
          "i": "11"
        },
        {
          "x": 0,
          "y": 10,
          "w": 2,
          "h": 5,
          "i": "12"
        },
        {
          "x": 2,
          "y": 10,
          "w": 2,
          "h": 5,
          "i": "13"
        },
        {
          "x": 4,
          "y": 8,
          "w": 2,
          "h": 4,
          "i": "14"
        },
        {
          "x": 6,
          "y": 8,
          "w": 2,
          "h": 4,
          "i": "15"
        },
        {
          "x": 8,
          "y": 10,
          "w": 2,
          "h": 5,
          "i": "16"
        },
        {
          "x": 10,
          "y": 4,
          "w": 2,
          "h": 2,
          "i": "17"
        },
        {
          "x": 0,
          "y": 9,
          "w": 2,
          "h": 3,
          "i": "18"
        },
        {
          "x": 2,
          "y": 6,
          "w": 2,
          "h": 2,
          "i": "19"
        }
      ]
    }
  // console.log(props.new_arrival)
</script>

<style scoped>

</style>