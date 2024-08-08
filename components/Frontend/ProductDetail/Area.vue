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
              <FrontendProductDetailTabNav :productDetail="productStore?.getProduct" :description="productStore?.getDescription" :attributes="productStore.getAttributes"/>
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
  const route = useRoute();
  const nuxtApp = useNuxtApp();
  const loading = ref(true);
  const slug = route.params.slug
  

  onMounted(() => {
      fetchProductDetails(route.params.slug);
    });

    const fetchProductDetails = async (slug) => {
      if (slug) {
        try {
          loading.value = true;
          const daydata = await productStore.fetchProductDetails(slug);
          if(daydata){
            loading.value = false;
          }
        } catch (error) {
          loading.value = false;
          console.error('Error fetching product details:', error);
        } finally {
          loading.value = false;
        }
      } else {
        console.error('Slug not found in route parameters');
        loading.value = false;
      }
    }; 

  async function changeFilter(newData) {
    try {
      console.log(newData)
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
      loading.value = false
      console.error(error);
    }
  }

</script>