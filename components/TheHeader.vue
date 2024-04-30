<template>
    <div>
        <header class="shadow-md border-b-1 relative px-6">
            <nav class="container mx-auto p-4 justify-between flex sticky">
                <NuxtLink class="" to="/">
                    <img src="/public/brainybuzzlong.png" class="w-auto h-20 hidden md:block" alt="Image Link here">
                    <img src="/public/bbLogo.png" class="w-auto h-16 md:hidden" alt="Image Link here">
                </NuxtLink>
                <SearchBar />
                <div class="flex items-center gap-8">
                    <div class="relative hidden md:block">
                        <button type="button" class="text-center "> <Icon name="material-symbols:account-circle-full" size="2rem" class="mb-2 hover:drop-shadow-sm"/>
                        <span class="ml-3 font-400 text-2xl hover:drop-shadow-2xl">Login</span>
                    </button>
                    </div>
                <div class="relative">
                    <!-- <span class="badge" > 0</span> -->
                    <UBadge size="sm" :ui="{ rounded: 'rounded-full'}"  class="inline-block absolute right-[-13px] top-[-6px] font-bold text-center">0</UBadge>
                    <button type="button" class=""> <Icon name="solar:heart-angle-outline" size="2rem"/></button>
                </div>

                <div class="relative py-2">
                    <UBadge size="sm" :ui="{ rounded: 'rounded-full' }" class="inline-block absolute right-[-12px] top-[-2px] font-bold text-center">0</UBadge>
                    <button type="button" class=""> <Icon name="solar:bag-5-linear" size="2rem"/></button>
                </div>
                </div>
        </nav>

        <!-- Bottom Header -->
       

        </header>
    </div>
</template>

<script setup>
// import useIsActiveLink from '~/composables/useIsActiveLink';

</script>
