<template>
    <div class=" pt-4 pb-4 border-t-0 border-black">
        <div class="container">
            <div class="pt-4 pb-4 border-t border-black">
                <div class="grid md:grid-cols-2 items-center grid-cols-1">
                    <div class="text-sm text-start">
                        <ClientOnly>
                            <p>
                                © {{ new Date().getFullYear() }} All Rights Reserved | by <NuxtLink :to="{name: 'home'}">{{ address?.default_project_name }}</NuxtLink>.
                            </p>
                        </ClientOnly>
                    </div>
                    <div class="text-sm text-end">
                        <ClientOnly>
                            <p>
                                {{ address?.default_copyright_text }}
                            </p>
                        </ClientOnly>
                    </div>
                </div>
            </div>  
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(['address'])
</script>
