
export const useProductStore = defineStore('product', () =>{
    const selectedProduct = ref('')
    const selectedAttribute = ref('')
    

    return {selectedProduct, selectedAttribute};
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))
  }