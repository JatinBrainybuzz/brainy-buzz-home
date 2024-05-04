<template>
    <div class="flex flex-col h-screen justify-between text-center no-scrollbar">
        <div>
            <div>
            <PromotionalBar />
        </div>
        </div>
        
        <div>
        <slot />
        </div>
        <div>
            <FooterTheFooter />
        </div>
    </div>
</template>

<script setup>
    
</script>