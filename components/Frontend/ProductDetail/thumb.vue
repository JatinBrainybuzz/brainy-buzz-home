<template>
  <div class="tp-product-details-thumb-wrapper tp-tab sm:flex ">
    <nav class="border w-full">
      <div class="nav nav-tabs sm:flex-col" id="productDetailsNavThumb" role="tablist">
        <!-- <img class="border border-gray-900 border-opacity-30" src="/bbLogo.png" alt="hello" /> -->
          <!-- <swiper :slides-per-view="3" :space-between="50" class="swiper-gallery gallery-top">
          <swiper-slide v-for="productImage in productImages" :key="productImage?.id">
            <img :src="productImage?.path" :srcset="productImage?.srcsetImage" alt="product-image" width="100%"
              class="position-relative">
          </swiper-slide>
        </swiper> -->
        <swiper :style="{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }"
        :spaceBetween="10"
        :navigation="true"
        :thumbs="{ swiper: thumbsSwiper }"
        :modules="modules"
        class="mySwiper2">
      <swiper-slide v-for="productImage in productImages" :key="index">
        <img :src="productImage?.image" :srcset="productImage?.srcsetImage" alt="product-image" width="100%"
                class="position-relative">
      </swiper-slide>
    </swiper>
  <swiper
      @swiper="setThumbsSwiper"
      :spaceBetween="10"
      :slidesPerView="4"
      :freeMode="true"
      :watchSlidesProgress="true"
      :modules="modules"
      class="mySwiper"
    >
    <swiper-slide v-for="productImage in productImages" :key="index">
      <img :src="productImage?.image" :srcset="productImage?.srcsetImage" alt="product-image" width="100%"
              class="position-relative">
    </swiper-slide>
  </swiper>
          
  
      <!-- <swiper :slides-per-view="2" :space-between="50" class="swiper-gallery gallery-top">
          <swiper-slide v-for="productImage in new_arrival" :key="index">
            <img :src="productImage?.image" :srcset="productImage?.srcsetImage" alt="product-image" width="100%"
              class="position-relative">
          </swiper-slide>
        </swiper> -->
      </div>
    </nav>
    <!-- <div class="tab-content m-img" id="productDetailsNavContent">
      <div>
        <div class=" relative mb-3 bg-gray-100">
          <img class="border w-full border-gray-900 border-opacity-30" src="/bbLogo.png" alt="hello" />
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
  import 'swiper/css/free-mode';
  import 'swiper/css/navigation';
  import 'swiper/css/thumbs';

const thumbsSwiper = ref(null);

const modules = [FreeMode, Navigation, Thumbs]
// const config = useRuntimeConfig();
// const HOMEPAGE_API = config.public.appUrl+"/api/home/get-all-homepage-data?order_id=9&q&categories=all&sortBy=featured&page=1&perPage=9&priceRange=7400&priceRangeDefined=all&routePath=/product/filter&domain=localhost&url=localhost&activity=visited_website";
// const {  data: formdata } = await useLazyFetch(HOMEPAGE_API);

console.log(formdata.value)


const setThumbsSwiper = (swiper) => {
        thumbsSwiper.value = swiper;
      };



// const new_arrival = computed(() => {
//   return formdata?.value?.data?.product?.new_arrival;
// });
  const props = defineProps(['productImages'])
</script>