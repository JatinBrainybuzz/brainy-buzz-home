<template>
    <section class="tp-product-details-area">
      <div class="tp-product-details-top pb-8">
        <div class="container">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div>
              <!-- product details thumb start -->
              <!-- <product-details-thumb
                :product="product"
              /> -->
             <FrontendProductDetailThumb />
              <!-- product details thumb end -->
            </div>
            <!-- col end -->
            <div>
              <!-- product details wrapper -->
             <LazyFrontendProductDetailWrapper />
              <!-- <product-details-wrapper :product="product" /> -->
              <!-- product details wrapper -->
            </div>
          </div>
        </div>
      </div>
      <div class="tp-product-details-bottom pb-36">
        <div class="container">
          <div class="grid grid-cols-1">
            <div>
              <!-- product details tab nav -->
              <FrontendProductDetailTabNav />
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <!-- video modal start -->
    <!-- <modal-video/> -->
    <!-- video modal end -->
  </template>
  
  <script setup >
 
  
  </script>
  