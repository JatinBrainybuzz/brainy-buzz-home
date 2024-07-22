import { defineEventHandler, useFetch } from 'nuxt/app';

export default defineEventHandler(async (context) => {
  const config = useRuntimeConfig()
  const { id } = context.params; // Access route parameter
  const HOMEPAGE_API = `${config.public.appUrl}/api/home/get-all-homepage-data?q=&categories=all&sortBy=featured&page=1&perPage=9&priceRange=7400&priceRangeDefined=all&routePath=/product/filter&url=https://demo.brainybuzz.co/&activity=visited_website&domain=demo.brainybuzz.co`;

  const { data } = await useFetch(HOMEPAGE_API);
  return { new_arrival: data.value.data.product.new_arrival };
});
