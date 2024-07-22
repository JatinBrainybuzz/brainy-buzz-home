<template>
    <div class="tp-shop-sidebar mr-10 mt-20">
      <!-- filter -->
      <div class="shop-widget mb-35">
        <h3 class="shop-widget-title border-none">Price Filter</h3>
        <SidebarPriceFilter />
        <!-- price filter end -->
      </div>
      <!-- status -->
      <div class="shop-widget mb-50">
        <h3 class="shop-widget-title">Product Status</h3>
        <!-- filter status start -->
        <SidebarFilterStatus :data="category"/>
        <!-- filter status end -->
      </div>
      <!-- categories -->
      <div class="shop-widget mb-50">
        <h3 class="shop-widget-title">Categories</h3>
        <!-- filter categories start -->
        <SidebarFilterCategory :data="category" />
        <!-- filter categories end -->
      </div>
      <!-- product rating -->
      <div class="shop-widget mb-50">
        <h3 class="shop-widget-title">Top Rated Products</h3>
        <!-- filter top-product start -->
        <!-- <shop-sidebar-top-product /> -->
        <!-- filter top-product end -->
      </div>
      <!-- brand -->
      <div class="shop-widget mb-50">
        <h3 class="shop-widget-title">Popular Brands</h3>
        <!-- filter brand start -->
        <!-- <shop-sidebar-filter-brand :load_more="true"/> -->
        <!-- filter brand end -->
      </div>
      <!-- reset filter start -->
      <!-- <shop-sidebar-reset-filter :load_more="true" /> -->
      <!-- reset filter end -->
    </div>
  </template>
  
  <script setup>
  const config = useRuntimeConfig()
const HOMEPAGE_API = `${config.public.appUrl}/api/home/get-all-homepage-data?q=&categories=all&sortBy=featured&page=1&perPage=9&priceRange=7400&priceRangeDefined=all&routePath=/product/filter&url=https://demo.brainybuzz.co/&activity=visited_website&domain=demo.brainybuzz.co`;
const {  data: HomeAPI } = await useLazyFetch(HOMEPAGE_API);
const product = computed (() => {return HomeAPI?.value?.data?.product.trending })
const category = computed (() => {return HomeAPI?.value?.data?.parent_category })

  </script>

<style scoped >
.shop-widget-title {
    @apply font-medium text-lg pb-5 
}
.shop-widget{
    @apply border-b-2 pb-2 mb-2;
}
</style>
  