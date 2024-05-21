<template>
    <!-- breadcrumb area start -->
    <section class="breadcrumb__area bg-center bg-cover bg-no-repeat pt-[95px] pb-[50px]">
      <div class="container">
          <div class="grid grid-cols-1 text-start xl:ml-12 ml-2">
            <div>
                <div class="relative z-[1]">
                  <h3 class="font-medium text-4xl leading-none mb-6">Grab Best Offer</h3>
                  <div class="breadcrumb__list">
                      <span><nuxt-link href="/">Home</nuxt-link></span>
                      <span>Coupon</span>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </section>
    <!-- breadcrumb area end -->
  
    <!-- coupon area start -->
    <div class="tp-coupon-area">
      <div class="container">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <!-- <div v-for="item in coupon_data" :key="item.id" class="col-xl-6">
                <coupon-item :coupon="item" />
            </div> -->
            <FrontendCouponItem  name="Computer Ball" coupon="June2024"/>
            <FrontendCouponItem  name="Nagina of sitara" coupon="Freedom32"/>
            <FrontendCouponItem  name="Golden pendent" coupon="SuperPower"/>
            <FrontendCouponItem  name="Black Sale" coupon="SaveOnSale"/>
          </div>
      </div>
    </div>
    <!-- coupon area end -->
  </template>
  
  <script setup>
  
  </script>
  