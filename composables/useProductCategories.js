// import { defineEventHandler,useRuntimeConfig, useFetch } from 'nuxt/app';

// export default defineEventHandler(async (context) => {
//   const { id } = context.params; // Access route parameter
//   const config = useRuntimeConfig();
//   const HOMEPAGE_API = config.public.appUrl+"/api/home/get-all-homepage-data?order_id=9&q&categories=all&sortBy=featured&page=1&perPage=9&priceRange=7400&priceRangeDefined=all&routePath=/product/filter&domain=localhost&url=localhost&activity=visited_website";
  

//   const { data } = await useFetch(HOMEPAGE_API);
//   return { new_arrival: data.value.data.product.new_arrival };
// });
