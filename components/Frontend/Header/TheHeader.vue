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
                        <button type="button" class="text-center ">
                            <ClientOnly>
                                <Icon name="material-symbols:account-circle-full" size="2rem" class="mb-2 hover:drop-shadow-sm"/>
                            </ClientOnly>
                        <NuxtLink :to="{name: 'login'}"><span class="ml-3 font-400 text-2xl hover:drop-shadow-2xl">Login</span></NuxtLink>
                    </button>
                    </div>
                <div class="relative">
                    <div>
                    </div>
                    <!-- <span class="badge" > 0</span> -->
                    <UBadge size="sm" :ui="{ rounded: 'rounded-full'}"  class="inline-block absolute right-[-13px] top-[-6px] font-bold text-center">{{cartStore?.Wishlist}}</UBadge>
                    <NuxtLink :to="{name: 'wishlist'}"><button type="button" class=""> 
                        <ClientOnly>
                            <Icon name="solar:heart-angle-outline" size="2rem"/>
                        </ClientOnly>
                    </button></NuxtLink>
                </div>

                <div class="relative py-2">
                    <UBadge size="sm" :ui="{ rounded: 'rounded-full' }" class="inline-block absolute right-[-12px] top-[-2px] font-bold text-center">{{cartStore?.Cart}}</UBadge>
                    <NuxtLink :to="{name: 'cart'}" >
                    <button type="button" class=""> 
                        <ClientOnly>
                            <Icon name="solar:bag-5-linear" size="2rem"/>
                        </ClientOnly>
                    </button>
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
// const config = useRuntimeConfig()

const HomeApiStore = useHomeApiStore();
const items = ref(null);
// console.log('items data',items.value)
onBeforeMount(async () => {
    const data =  HomeApiStore.data
    // items.value = data?.value?.data.parent_category;
    items.value = data?.data.parent_category;
    console.log('this is header',data)
    console.log('item value',items.value)
   
});



    // console.log('Home api :', data.value.data.parent_category);
     




const cartStore = useCartStore();

</script>
