<template>
  <div>
    <NuxtLoadingIndicator />
        <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
const {data: color} = await useLazyFetch('/api/color');
const colorData = color.value
const appConfig = useAppConfig();
onServerPrefetch(async () => {
    appConfig.ui.primary = colorData.value;
})
onMounted(() =>{
    //  console.log('This is a mounted message ')
     appConfig.ui.primary = colorData.value;
        window.localStorage.setItem('nuxt-ui-primary', appConfig.ui.primary);
})
</script>