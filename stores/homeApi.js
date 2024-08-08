
export const useHomeApiStore = defineStore('homeApi', ()=> {
    const data = ref(null);

    function addHomeData(newData){
        data.value = newData;
    }

    const getData = computed(() => data.value);
    return {data, getData, addHomeData}
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useHomeApiStore, import.meta.hot))
  }