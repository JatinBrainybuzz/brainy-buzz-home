<template>
    <section>
        <UCarousel v-slot="{ item }" ref="carouselRef" :items="arr" :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/2' }" class="rounded-lg overflow-hidden" arrows indicators>
            <img :src="item.media" class="object-fit w-full h-3/4" draggable="false">
        </UCarousel>
        
        <FrontendTheme1FeatureArea />
        <FrontendProductNewArrival :products="new_arrival" heading="New Arrival"/>
        <FrontendProductNewArrival :products="trending" heading="Trending" :autoplay='true'/>
        <!-- <HomepageCategoryCard :parent_category = "parent_categories"/> -->
    </section>
</template>

<script setup>
const config = useRuntimeConfig();
console.log(config.public);
const HOMEPAGE_API = config.public.appUrl+"/api/home/get-all-homepage-data?order_id=9&q&categories=all&sortBy=featured&page=1&perPage=9&priceRange=7400&priceRangeDefined=all&routePath=/product/filter&domain="+config.public.domain+"&url="+config.public.url+"&activity=visited_website";

// const { data: items } = await useLazyFetch(HOMEPAGE_API, {
//   mode: 'cors', // Ensure the request is made with CORS mode
//   headers: {
//     'Access-Control-Allow-Origin': '*',
//   }
// });
const {  data: items } = await useLazyFetch(HOMEPAGE_API);

const carouselRef = ref()

console.log(HOMEPAGE_API);

const parentCategories = computed(() => {
  return items?.value?.data?.parent_category;
});
// const arr = items.value.data.banner.below_category.data;
// const new_arrival = items.value.data.product.new_arrival;

const arr = computed(() => {
  return items?.value?.data?.banner?.below_trending?.data;
});

const new_arrival = computed(() => {
  return items?.value?.data?.product?.new_arrival;
});
const trending = computed(() => {
  return items?.value?.data?.product?.trending;
});

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 3000)
})


</script>

