export const useHomeApi = async () =>{
    const config = useRuntimeConfig()
    const HOMEPAGE_API = config.public.appUrl+"/api/home/get-all-homepage-data?order_id=9&q&categories=all&sortBy=featured&page=1&perPage=9&priceRange=7400&priceRangeDefined=all&routePath=/product/filter&domain=localhost&url=localhost&activity=visited_website";
        const HomeAPI = async ()=>{
            const data = await useFetch(HOMEPAGE_API);
            return data.data;
        }
    return{
        HomeAPI,
    }
}
