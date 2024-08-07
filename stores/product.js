
import { useRuntimeConfig, useRoute, useLazyFetch } from "#app";
import { ref } from "vue";

export const useProductStore = defineStore('product', () =>{

    const items = ref(null);
    const currency = ref(null);
    const attributes = ref(null);
    const description = ref(null);
    
    async function fetchProductDetails() {
        const config = useRuntimeConfig();
        const router = useRoute();
        const ProductDetailsAPI = config.public.appUrl+"/api/product/get-product-details?slug="+router.path.split("/").pop()+"&activity=clicked_products";    
        const { data } = await $fetch(ProductDetailsAPI);
        
        items.value = data.value;
        currency.value = data.value.currency;
        attributes.value = data.value.product.attributes;
        description.value = data.value.product.description
      }

      function updateProductDetails(newData) {
        items.value = newData.items;
        currency.value = newData.currency;
        attributes.value = newData.attributes;
      }


    return { items, currency, attributes, description, fetchProductDetails, updateProductDetails };
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))
  }