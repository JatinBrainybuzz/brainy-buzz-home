<template>
  <div class="tp-product-details-thumb-wrapper tp-tab sm:flex">
    <nav>
      <div class="nav nav-tabs sm:flex-col" id="productDetailsNavThumb" role="tablist">
        <img class="border border-gray-900 border-opacity-30" src="/bbLogo.png" alt="hello" />
          <!-- <swiper :slides-per-view="3" :space-between="50" class="swiper-gallery gallery-top">
          <swiper-slide v-for="productImage in productImages" :key="productImage?.id">
            <img :src="productImage?.path" :srcset="productImage?.srcsetImage" alt="product-image" width="100%"
              class="position-relative">
          </swiper-slide>
        </swiper> -->
      </div>
    </nav>
    <div class="tab-content m-img" id="productDetailsNavContent">
      <div>
        <div class=" relative mb-3 bg-gray-100">
          <img class="border w-full border-gray-900 border-opacity-30" src="/bbLogo.png" alt="hello" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  const props = defineProps(['productImages'])
</script>