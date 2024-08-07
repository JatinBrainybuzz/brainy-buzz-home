
export const useCartStore = defineStore('cart', ()=> {
   const Cart = ref(0)
   return {Cart};
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
  }