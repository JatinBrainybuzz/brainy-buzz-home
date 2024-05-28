<template>
    <div class="md:hidden block fixed left-0 bottom-0 w-full h-14 z-50 bg-white">
        <div class="h-full shadow-lg">
            <div class=" my-1 h-full items-center flex justify-around">
                <div class="inline-block ml-4 text-primary">
                    <NuxtLink to="/" class="flex flex-col justify-center items-center ">
                        <Icon name="ic:baseline-house" size="1.8rem"/>
                        <span class=" text-xs">Home</span>
                    </NuxtLink>
                </div>
                <div class="inline-block text-primary">
                    <NuxtLink to="/" class="flex flex-col justify-center items-center ">
                        <Icon name="ph:shopping-cart-bold" size="1.8rem"/>
                        <span class=" text-xs">Cart</span>
                    </NuxtLink>
                </div>
                <div class="inline-block text-primary">
                    <NuxtLink to="/" class="flex flex-col justify-center items-center ">
                        <Icon name="ic:baseline-play-circle-outline" size="1.8rem"/>
                        <span class=" text-xs">Reels</span>
                    </NuxtLink>
                </div>
                <div class="inline-block text-primary">
                    <NuxtLink to="/" class="flex flex-col justify-center items-center ">
                        <Icon name="material-symbols:confirmation-number-rounded" size="1.8rem"/>
                        <span class=" text-xs">Deals</span>
                    </NuxtLink>
                </div>
                <div class="inline-block text-primary">
                    <NuxtLink to="/" class="flex flex-col justify-center items-center" @click="toggleProfile">
                        <Icon name="mdi:account-circle" size="1.8rem"/>
                        <span class=" text-xs">Profile</span>
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class=" transition-1">
            
        </div>
    </div>
</template>

<script setup>
    const showSidebar = ref(false);
    const toggleProfile = () => {
      showSidebar.value = !showSidebar.value;
    };
</script>
