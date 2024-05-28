<template>
    <div class="flex flex-col h-screen justify-between text-center no-scrollbar">
        <div>
            <PromotionalBar />
            <FrontendHeaderTheHeader />
        </div>
        <div class="container mx-auto p-4">
            <slot />
        </div>
        <FooterTheFooter />
        <FooterMobile />
    </div>
</template>

<script setup>

</script>