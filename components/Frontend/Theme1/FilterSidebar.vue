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
        <shop-sidebar-filter-categories :load_more="true" />
        <!-- filter categories end -->
      </div>
      <!-- product rating -->
      <div class="shop-widget mb-50">
        <h3 class="shop-widget-title">Top Rated Products</h3>
        <!-- filter top-product start -->
        <shop-sidebar-top-product />
        <!-- filter top-product end -->
      </div>
      <!-- brand -->
      <div class="shop-widget mb-50">
        <h3 class="shop-widget-title">Popular Brands</h3>
        <!-- filter brand start -->
        <shop-sidebar-filter-brand :load_more="true"/>
        <!-- filter brand end -->
      </div>
      <!-- reset filter start -->
      <shop-sidebar-reset-filter :load_more="true" />
      <!-- reset filter end -->
    </div>
  </template>
  
  <script setup>
const HOMEPAGE_API = "http://localhost:8000/api/home/get-all-homepage-data?order_id=13&q&categories=all&sortBy=featured&page=1&perPage=9&priceRange=7400&priceRangeDefined=all&guestToken=zqhlljhc2vcvt182507tnksealg0jr9ab8hnreov&routePath=/product/filter&url&activity=visited_website";
const {  data: HomeAPI } = await useLazyFetch(HOMEPAGE_API);
const product = HomeAPI.value.data.product.trending
const category = HomeAPI.value.data.parent_category

  </script>

<style scoped >
.shop-widget-title {
    @apply font-medium text-lg pb-5 
}
.shop-widget{
    @apply border-b-2 pb-2 mb-2;
}
</style>
  