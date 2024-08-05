
export const useCounterStore = defineStore('counter', ()=> {
   const count = ref(0)
   function increaseCount() {
    return count.value++;
   }
   return {count};
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
  }