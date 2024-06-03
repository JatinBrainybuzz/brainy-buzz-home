<template>
    <section class="tp-shop-area pb-96">
      <div class="container">
        <div class=" text-start mx-32 mt-12 mb-8">
         <span class=" text-4xl ">Welcome to {{ id }} </span>
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
                    :pagination= true
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
      <NuxtPage />
    </section>
</template>

<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid , Pagination} from "swiper/modules";


// definePageMeta ({
//     layout: 'product'
// })
const HOMEPAGE_API = "http://localhost:8000/api/home/get-all-homepage-data?order_id=9&q&categories=all&sortBy=featured&page=1&perPage=9&priceRange=7400&priceRangeDefined=all&guestToken=zqhlljhc2vcvt182507tnksealg0jr9ab8hnreov&routePath=/product/filter&url&activity=visited_website&domain=demo.brainybuzz.co";
const {  data: HomeAPI } = await useLazyFetch(HOMEPAGE_API);
const new_arrival = HomeAPI.value.data.product.new_arrival
// definePageMeta ({
//     layout: 'product'
// })

const { currentRoute } = useRouter();
const {id} = useRoute().params
const routeName = currentRoute.value.name;
</script>

<style lang="scss" scoped>

</style>