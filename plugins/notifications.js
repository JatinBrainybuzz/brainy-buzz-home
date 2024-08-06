// plugins/notifications.js
import { ref } from 'vue';
export default defineNuxtPlugin((nuxtApp) => {
  const notifications = ref([]);

  const sendNotification = (message, position = 'top-right', duration = 5000, variant, icon ) => {
    const id = Date.now();
    notifications.value.push({ id, message, position, duration,variant,icon });
    setTimeout(() => {
      notifications.value = notifications.value.filter(notification => notification.id !== id);
    }, duration);
  };

  nuxtApp.provide('sendNotification', sendNotification);
  // nuxtApp.vueApp.config.globalProperties.$notify = addNotification;

  return {
    provide: {
      notifications,
    },
  };
});
