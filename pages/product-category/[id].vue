<template>
  <div>
    <section class="tp-shop-area pb-20">
      <!-- <template v-if="$route.params.slug">
      </template>
    <template v-else> -->
      <div v-if="!new_arrival">
        Loading Data ....
      </div>
      <div v-else class="container">
        <!-- v-if="new_arrival" -->
        <div class=" text-start mx-32 mt-12 mb-8">
         <span class=" text-4xl ">Welcome to {{$route.params.id}} </span>
         <span>
         </span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 xl:grid-cols-4">
          <div class="">
            <!-- shop sidebar start -->
            <FrontendTheme1FilterSidebar />
            <!-- shop sidebar end -->
          </div>
          <div class=" md:col-span-1 lg:col-span-3 xl:col-span-3">
                <swiper
                    :slidesPerView="4"
                    :grid= "{
                        rows: 2
                    }"
                  
                    :pagination="{
                        clickable: true,
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
                    :modules="modules"
                    class="mySwiper"
                >

                <Swiper-slide v-for="(item, i) in new_arrival" :key="i">
                    <FrontendTheme1Card :item="item" />
                </Swiper-slide>
                </Swiper>
            </div>
        </div>
      </div>
      <!-- </template> -->
      <NuxtPage />
    </section>
    </div>
</template>

<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination } from 'swiper/modules';
const config = useRuntimeConfig()
const HOMEPAGE_API = config.public.appUrl+"/api/home/get-all-homepage-data?order_id=9&q&categories=all&sortBy=featured&page=1&perPage=9&priceRange=7400&priceRangeDefined=all&routePath=/product/filter&domain="+config.public.domain+"&url="+config.public.url+"&activity=visited_website";
  const {  data: HomeAPI } = await useLazyFetch(HOMEPAGE_API);

  const new_arrival = computed( ()=>
   { return HomeAPI?.value?.data?.product?.new_arrival;}) 
</script>