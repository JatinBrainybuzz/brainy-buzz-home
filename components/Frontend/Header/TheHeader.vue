<template>
    <div class="shadow-md border-b-1">
        <header class=" relative px-6">
            <nav class="container mx-auto p-4 justify-between flex sticky">
                <NuxtLink :to="{ name: 'home'}">
                    <img src="/public/brainybuzzlong.png" class="w-auto h-20 hidden md:block" alt="Image Link here">
                    <img src="/public/bbLogo.png" class="w-auto h-16 md:hidden" alt="Image Link here">
                </NuxtLink>
                <SearchBar />
                <div class="flex items-center gap-8">
                    <div class="relative hidden md:block">
                        <button type="button" class="text-center "> <Icon name="material-symbols:account-circle-full" size="2rem" class="mb-2 hover:drop-shadow-sm"/>
                        <NuxtLink :to="{name: 'login'}"><span class="ml-3 font-400 text-2xl hover:drop-shadow-2xl">Login</span></NuxtLink>
                    </button>
                    </div>
                <div class="relative">
                    <!-- <span class="badge" > 0</span> -->
                    <UBadge size="sm" :ui="{ rounded: 'rounded-full'}"  class="inline-block absolute right-[-13px] top-[-6px] font-bold text-center">0</UBadge>
                    <NuxtLink :to="{name: 'wishlist'}"><button type="button" class=""> <Icon name="solar:heart-angle-outline" size="2rem"/></button></NuxtLink>
                </div>

                <div class="relative py-2">
                    <UBadge size="sm" :ui="{ rounded: 'rounded-full' }" class="inline-block absolute right-[-12px] top-[-2px] font-bold text-center">0</UBadge>
                    <NuxtLink :to="{name: 'cart'}" >
                    <button type="button" class=""> 
                        <Icon name="solar:bag-5-linear" size="2rem"/></button>
                    </NuxtLink>
                </div>
                </div>
        </nav>
        </header>
        <!-- Bottom Header -->
        <FrontendHeaderBottom :category="items" />
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const HOMEPAGE_API = config.public.appUrl+"/api/home/get-all-homepage-data?order_id=9&q&categories=all&sortBy=featured&page=1&perPage=9&priceRange=7400&priceRangeDefined=all&routePath=/product/filter&domain=localhost&url=localhost&activity=visited_website";
const {  data: HomeAPI } = await useLazyFetch(HOMEPAGE_API);
const items = computed(()=>{
    return HomeAPI?.value?.data?.parent_category;
}) 

</script>
