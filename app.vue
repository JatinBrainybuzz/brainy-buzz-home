<template>
  <div>
    <NuxtLoadingIndicator />
        <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <!-- <UNotifications /> -->
    <div v-for="notification in $notifications" :key="notification.id">
      <Notification :message="notification.message" :position="notification.position" :duration="notification.duration" />
    </div>
  </div>
</template>
<script setup>
import { useNuxtApp } from '#app';
import Notification from '~/components/Notification.vue';

const { $notifications } = useNuxtApp();

const {data: color} = await useLazyFetch('/api/color');
const colorData = color.value
const appConfig = useAppConfig();
onServerPrefetch(async () => {
    appConfig.ui.primary = colorData.value;
})
onMounted(() =>{
     appConfig.ui.primary = colorData.value;
      window.localStorage.setItem('nuxt-ui-primary', appConfig.ui.primary);
})
</script>