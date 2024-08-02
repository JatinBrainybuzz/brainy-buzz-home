<template>
  <div class="tp-product-details-thumb-wrapper tp-tab sm:flex ">
    <nav class="border w-full">
      <div class="nav nav-tabs sm:flex-col" id="productDetailsNavThumb" role="tablist">
        <swiper :style="{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }" :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }" :modules="modules"
          class="mySwiper2">
          <swiper-slide v-for="productImage in productImages">
            <img :src="productImage?.image" :srcset="productImage?.srcsetImage" alt="product-image" width="100%"
              class="position-relative">
          </swiper-slide>
        </swiper>
        <swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="4" :freeMode="true"
          :watchSlidesProgress="true" :modules="modules" class="mySwiper">
          <swiper-slide v-for="productImage in productImages">
            <img :src="productImage?.image" :srcset="productImage?.srcsetImage" alt="product-image" width="100%"
              class="position-relative">
          </swiper-slide>
        </swiper>
      </div>
    </nav>
  </div>
</template>

<script setup>
  import {
    Swiper,
    SwiperSlide
  } from 'swiper/vue';
  import 'swiper/css';
  import {
    FreeMode,
    Navigation,
    Thumbs
  } from 'swiper/modules';
  import 'swiper/css/free-mode';
  import 'swiper/css/navigation';
  import 'swiper/css/thumbs';

  const thumbsSwiper = ref(null);

  const modules = [FreeMode, Navigation, Thumbs]

  const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
  };

  const props = defineProps(['productImages'])
</script>