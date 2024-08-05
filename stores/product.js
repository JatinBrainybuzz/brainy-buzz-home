
export const useProductStore = defineStore('product', () =>{
    const selectedProduct = ref('')
    return {selectedProduct};
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))
  }