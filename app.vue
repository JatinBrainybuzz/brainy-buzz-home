<template>
  <div>
    <div v-if="loading" class="fixed flex w-full h-full  justify-center items-center z-[9999] bg-black bg-opacity-40">
      <div class="absolute animate-spin rounded-full h-32 w-32 md:h-60 md:w-60 border-t-4 border-b-4 border-primary-500 xl:w-96 xl:h-96"></div>
      <img src="/public/bbLogo.png"  class="rounded-full max-w-28 max-h-28  md:max-w-52 md:max-h-52 xl:max-w-80 xl:max-h-80"> 
  </div>
    <NuxtLoadingIndicator />
        <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <!-- <UNotifications /> -->
    <div v-for="notification in $notifications" :key="notification.id">
      <Notification :message="notification.message" :position="notification.position" :duration="notification.duration"  :variant="notification.variant"/>
    </div>
  </div>
</template>
<script setup>
import { useNuxtApp } from '#app';
import Notification from '~/components/Notification.vue';

const { $notifications } = useNuxtApp();

const {data: color} = await useLazyFetch('/api/color');
const colorData = color.value;
const appConfig = useAppConfig();
onServerPrefetch(async () => {
    appConfig.ui.primary = colorData.value;
})
onMounted(() =>{
     appConfig.ui.primary = colorData.value;
      window.localStorage.setItem('nuxt-ui-primary', appConfig.ui.primary);
})

const nuxtApp = useNuxtApp();
const loading = ref(false);
nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});


</script>