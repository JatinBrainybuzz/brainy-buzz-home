<template>
    <div class="flex flex-col h-screen justify-between text-center">
        <div>
            <PromotionalBar />
            <TheHeader />
        </div>
        <div class="container mx-auto p-4">
            <slot />
        </div>
        <FooterTheFooter />
    </div>
</template>

<script setup>

</script>