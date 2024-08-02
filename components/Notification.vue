<template>
    <div :class="['notification-container', position]" v-if="visible">
      <div class="notification">
        <p>{{ message }}</p>
        <!-- <button @click="close">Close</button> -->
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const props = defineProps({
    message: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      default: 'top-right', // Default position
    },
    duration: {
      type: Number,
      default: 5000, // Default duration
    },
  });
  
  const visible = ref(true);
  
  const close = () => {
    visible.value = false;
  };
  
  watch(() => props.message, () => {
    visible.value = true;
    setTimeout(() => {
      close();
    }, props.duration);
  });
  </script>
  
  <style scoped>
  .notification-container {
    position: fixed;
    z-index: 9999;
  }
  
  .notification-container.top-right {
    top: 20px;
    right: 20px;
  }
  
  .notification-container.bottom-left {
    bottom: 20px;
    left: 20px;
  }
  
  /* Add more positions as needed */
  
  .notification {
    background-color: #333;
    color: #fff;
    padding: 15px;
    border-radius: 5px;
  }
  </style>
  