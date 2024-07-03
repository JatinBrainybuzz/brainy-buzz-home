<template>
    <section>
        <UCarousel v-slot="{ item }" :items="arr" :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/2' }" class="rounded-lg overflow-hidden" arrows indicators>
            <img :src="item.media" class="object-fit w-full h-3/4" draggable="false">
        </UCarousel>
        
        <FrontendTheme1FeatureArea />
        <FrontendProductNewArrival :new_arrival="new_arrival"/>
        <!-- <HomepageCategoryCard :parent_category = "parent_categories"/> -->
    </section>
</template>

<script setup>
const HOMEPAGE_API = "https://demo.brainybuzz.co/api/home/get-all-homepage-data?q=&categories=all&sortBy=featured&page=1&perPage=9&priceRange=7400&priceRangeDefined=all&routePath=/product/filter&url=https://demo.brainybuzz.co/&activity=visited_website&domain=demo.brainybuzz.co";
const {  data: items } = await useLazyFetch(HOMEPAGE_API);
const parentCategories = computed(() => {
  return items?.value?.data?.parent_category;
});
// const arr = items.value.data.banner.below_category.data;
// const new_arrival = items.value.data.product.new_arrival;

const arr = computed(() => {
  return items?.value?.data?.banner?.below_category?.data;
});

const new_arrival = computed(() => {
  return items?.value?.data?.product?.new_arrival;
});
</script>

