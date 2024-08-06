<template>
  <div>
    <FrontendProductDetailBreadcrumb :title="details?.name"  :category="details?.category"/>
  <section class="tp-product-details-area">
    
    <div class="tp-product-details-top pb-8">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div>
            <!-- product details thumb start -->
            <LazyFrontendProductDetailThumb  :productImages="productImages"/>
            <!-- product details thumb end -->
          </div>
          <!-- col end -->
          <div>
            <!-- product details wrapper -->
            <LazyFrontendProductDetailWrapper :productDetail="details" @filterData="changeFilter" :currency="currency" />
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
            <FrontendProductDetailTabNav :productDetail="productDetail" :attributes="attributes"/>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script setup>
  const config = useRuntimeConfig();
  const router = useRoute();
  const ProductDetailsAPI = config.public.appUrl+"/api/product/get-product-details?slug="+router.path.split("/").pop()+"&activity=clicked_products";
  const {
    data: items
  } = useLazyFetch(ProductDetailsAPI);

  const details = ref({})

  const productDetail = computed(() => {
    return items ?.value ?.product;
  });

  details.value = productDetail;
  

  const currency = computed(() => {
    return items ?.value ?.currency;
  });

  const productImages = computed(() => {
    return items ?.value ?.product?.productImages;
  });
  const attributes = computed(() => {
    return items ?.value ?.product?.attributes;
  });

 

  async function changeFilter(newData) {
    try {
      const response = await $fetch(config.public.appUrl + "/api/product/change-filter", {
        method: 'post',
        body: { data: newData }
      });
      console.log(response.type);
      if ( response.type === "success") {
        details.value = response.data;
        response.data.selectedData.forEach(function(value) {
          var element = document.getElementById(value);
          if (element) {
            element.classList.add('border-success');
          }
        });
      } else if (response.data && response.data.productAttribute) {
        productDetails.value.attributes = response.data.productAttribute;
        response.data.selectedData.forEach(function(value) {
          var element = document.getElementById(value);
          if (element) {
            element.classList.add('border-success');
          }
        });
      } else {
        console.log('this is else tag', response);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }



</script>