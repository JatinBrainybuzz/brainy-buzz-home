<template>
   <div class="tp-header-bottom border-t border-gray-100 px-24 hidden lg:block">
            <div class="container">
            <div class="tp-mega-menu-wrapper relative">
                <div class="flex items-center">
                <div class="xl:w-1/4 lg:w-1/4 relative">
                    <!-- categories start -->
                    <FrontendHeaderTopCategory :category="props.category"/>
                    <!-- categories end -->
                </div>
                <div class="xl:col-span-6 lg:col-span-6">
                    <div class="main-menu menu-style-1">
                    <nav class="tp-main-menu-content">
                        <!-- menus start -->
                        <FrontendHeaderMenu :category = "props.category" />
                        <!-- menus end -->
                    </nav>
                    </div>
                </div>
                <div class="xl:w-1/4 lg:w-1/4">
                    <div class="tp-header-contact flex items-center justify-end text-primary">
                    <div class="tp-header-contact-icon mr-4">
                        <span>
                            <ClientOnly>
                                <Icon size="1.5rem" name="material-symbols:phone-in-talk-watchface-indicator-sharp" />
                            </ClientOnly>
                        </span>
                    </div>
                    <div class="tp-header-contact-content text-base font-medium mb-2 leading-none">
                        <h5 class="mb-2">Hotline:</h5>
                        <p class="font-medium text-base mb-0 leading-none"><a href="tel:402-763-282-46">+(402) 763 282 46</a></p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
</template>

<script setup>
const props = defineProps({
    category: Array
})
</script>

<style  scoped>

</style>