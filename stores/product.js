
import { useRuntimeConfig } from "#app";
import { ref } from "vue";

export const useProductStore = defineStore('product', () =>{

    const config = useRuntimeConfig();
    // const items = ref(null);
    const product = ref(null);
    const currency = ref(null);
    const attributes = ref(null);
    const description = ref(null);
    
    async function fetchProductDetails(slug) {
        try {
        const ProductDetailsAPI = config.public.appUrl+"/api/product/get-product-details?slug="+slug+"&activity=clicked_products";    
        const data = await $fetch(ProductDetailsAPI);
        // items.value = data;
        product.value = data.product;
        currency.value = data.currency;
        attributes.value = data.product.attributes;
        description.value = data.product.description
      }
      catch (error) {
        console.error('Error fetching product details:', error);
      }
    }

      function updateProductDetails(newData) {
        product.value = newData;
        attributes.value = newData.attributes;
        description.value = newData.description;
      }

    // const getItems = computed(() => items.value);
    const getProduct = computed(() => product.value);
    const getAttributes = computed(() => attributes.value);
    const getDescription = computed(() => description.value);


    return { currency, attributes, description,getProduct, getAttributes ,getDescription ,  fetchProductDetails, updateProductDetails };
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))
  }