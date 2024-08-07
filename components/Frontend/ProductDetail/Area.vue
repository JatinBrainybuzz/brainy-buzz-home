<template>
  <div>
    <FrontendLoader v-if="loading" />
    <div>
      <LazyFrontendProductDetailBreadcrumb :title="slug"  :Category="productStore?.getProduct?.category"/>
    <section class="tp-product-details-area">
      
      <div class="tp-product-details-top pb-8">
        <div class="container">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div>
              <!-- product details thumb start -->
              <LazyFrontendProductDetailThumb  :productImages="productStore.getProduct?.productImages"/>
              <!-- product details thumb end -->
            </div>
            <!-- col end -->
            <div>
              <!-- product details wrapper -->
              <LazyFrontendProductDetailWrapper :productDetail="productStore.getProduct" :description="productStore.getDescription"
               @filterData="changeFilter" :currency="productStore.getCurrency" />
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
              <FrontendProductDetailTabNav :productDetail="productStore.getProduct" :attributes="productStore.getAttributes"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  </div>
</template>

<script setup>
  const config = useRuntimeConfig()
  const productStore = useProductStore();
  const router = useRoute();
  const nuxtApp = useNuxtApp();
  const loading = ref(true);
  const slug = router.params.slug;

    onMounted(async () => {
      if (slug) {
          try {
            loading.value = true;
            await productStore.fetchProductDetails(slug);
          } catch (error) {
            console.error('Error fetching product details:', error);
          } finally {
            loading.value = false;
          }
          } else {
            console.error('Slug not found in route parameters');
            loading.value = false;
        }
    });

  // async function fetchProductDetails(slug) {
  //     console.log('this is route:', slug);
  //     await productStore.fetchProductDetails(slug);
  //     loading.value = false;
  //   }

  async function changeFilter(newData) {
    try {
      loading.value = true;
      const response = await $fetch(config.public.appUrl + "/api/product/change-filter", {
        method: 'post',
        body: { data: newData }
      });
      if(response.type == 'success'){
        productStore.updateProductDetails(response.data);
        loading.value = false;
      }
      else{
        loading.value = false
        console.log('something is wrong with changing filter.')
      }

    } catch (error) {
      console.error(error);
    }
  }

</script>