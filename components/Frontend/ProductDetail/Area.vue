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
            <LazyFrontendProductDetailWrapper :productDetail="productDetail" :currency="currency" />
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

<script setup>
  const config = useRuntimeConfig();
  const ProductDetailsAPI = config.public.appUrl+"/api/product/get-product-details?slug="+window.location.pathname.split("/").pop()+"&activity=clicked_products";

  const {
    data: items
  } = await useLazyFetch(ProductDetailsAPI);
  const productDetail = computed(() => {
    return items ?.value ?.product;
  });
  const currency = computed(() => {
    return items ?.value ?.currency;
  });
</script>