<template>
<section class="tp-product-arrival-area ">
    <div class="container">
      <div class="flex flex-row items-end">
        <div class="xl:col-span-5 sm:col-span-6">
          <div class="text-sm ">
            <h3 class="relative text-4xl z-[1] text-black">
              New Arrivals
              <FrontendProductSvgSectionLine  />
            </h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-product-arrival-slider fix">
            <Swiper
              :slidesPerView="4"
              :spaceBetween="20"
              :pagination="true"
              :navigation="{
                nextEl: '.tp-arrival-slider-button-next',
                prevEl: '.tp-arrival-slider-button-prev',
              }"
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
              }"
              :modules="[Pagination, Navigation]"
              class="tp-product-arrival-active swiper-container"
            >
              <SwiperSlide v-for="(item, i) in new_arrival" :key="i">
                <!-- <div>
                    <img :src="item.image" alt="">
                    <span>{{ item.name }}</span>
                    
                </div> -->
                <FrontendProductTheme1Card :item="item" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
</section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from "swiper/modules";
const props = defineProps({
    new_arrival: Array
})
// console.log(props.new_arrival)
</script>

<style scoped>

</style>