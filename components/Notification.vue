<template>
    <div :class="['notification-container', position]" class="" v-if="visible">
      <div class="notification flex justify-center items-center shadow-lg" :class="variant">
        
        <Icon v-if="variant == 'success'" name="teenyicons:tick-circle-solid" class="mr-3 text-green-500 " :class="variant" size="1.2rem"/>
        <Icon v-else-if="variant == 'error'" name="ci:error" class="mr-3 text-red-500" :class="variant" size="1.2rem"/>
        <Icon v-else-if="variant == 'warning'" name="ph:warning-octagon-fill" class="mr-3 text-yellow-500" :class="variant" size="1.2rem"/>
        <Icon v-else-if="variant == 'theme'" name="material-symbols:exclamation" class="mr-3 text-primary-500" :class="variant" size="1.2rem"/>
        <Icon v-else name="material-symbols-light:arrow-circle-down" class="mr-3 text-primary-500" :class="variant" size="1.2rem"/>
        <p>{{ message }}</p>
        <button @click="close" class=" ml-6">
          <Icon name="oui:cross" />
        </button>
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
    variant: {
      type: String,
      default: '',
    }
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
    min-width: 120px;
    border: #000000;
    border-radius: 5%;
    z-index: 9999;
    
  }
  
  .notification-container.top-right {
    min-width: 120px;
    border: #000000;
    border-radius: 5%;
    top: 20px;
    right: 5%;
  }
  .notification-container.top-left {
    min-width: 120px;
    border: #000000;
    border-radius: 5%;
    top: 20px;
    left: 5%;
  }

  .warning {
    background-color: rgb(255, 255, 233) !important;
  }
  .success {
    background-color: rgb(219, 250, 216) !important;
  }
  .error{
    background-color: rgb(249, 219, 219) !important;
  }


  .notification-container.bottom-left {
    bottom: 20px;
    left: 20px;
  }
  .notification-container.bottom-right {
    bottom: 20px;
    right: 5%;
  }
  
  /* Add more positions as needed */
  
  .notification {
    background-color: #ffffff;
    color: #000000;
    padding: 10px;
    border-radius: 5px;
    border-width: 1px;
  }
  </style>
  