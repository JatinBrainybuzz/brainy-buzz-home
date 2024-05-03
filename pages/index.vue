<template>
    <div>
        <UCarousel v-slot="{ item }" :items="arr" :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/2' }" class="rounded-lg overflow-hidden" arrows indicators>
            <img :src="item.media" class="object-fit w-full h-3/4" draggable="false">
        </UCarousel>
        
        <FrontendTheme1FeatureArea />
        <FrontendProductNewArrival :new_arrival="new_arrival"/>
        <!-- <HomepageCategoryCard :parent_category = "parent_categories"/> -->
    </div>
</template>

<script setup>
const HOMEPAGE_API = "http://localhost:8000/api/home/get-all-homepage-data?order_id=9&q&categories=all&sortBy=featured&page=1&perPage=9&priceRange=7400&priceRangeDefined=all&guestToken=zqhlljhc2vcvt182507tnksealg0jr9ab8hnreov&routePath=/product/filter&url&activity=visited_website";
const {  data: items } = await useLazyFetch(HOMEPAGE_API);
const parent_categories = items.value.data.parent_category;
const arr = items.value.data.banner.below_category.data;
const new_arrival = items.value.data.product.new_arrival;

// console.log(arr)
</script>

