
export const useQuantityStore = defineStore('quantities', ()=> {
   const quantity = ref(0)
   return {quantity};
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useQuantityStore, import.meta.hot))
  }