import { defineEventHandler, useFetch } from 'nuxt/app';

export default defineEventHandler(async (context) => {
  const { id } = context.params; // Access route parameter
  const HOMEPAGE_API = `http://localhost:8000/api/home/get-all-homepage-data?order_id=9&q&categories=${id}&sortBy=featured&page=1&perPage=9&priceRange=7400&priceRangeDefined=all&guestToken=zqhlljhc2vcvt182507tnksealg0jr9ab8hnreov&routePath=/product/filter&url&activity=visited_website&domain=demo.brainybuzz.co`;

  const { data } = await useFetch(HOMEPAGE_API);
  return { new_arrival: data.value.data.product.new_arrival };
});
