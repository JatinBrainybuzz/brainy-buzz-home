<template>
    <div class="tp-shop-widget-content ml-2 mr-2 px-4">
      <div class=" relative price__slider">
        <div id="slider-range" class=" z-10 text-xs block filter-none " >
            <URange 
            size="md"
            color="primary"
            v-model="value"
            :min="minValue" :max="maxValue"
             />
        </div>
        
        <div class="tp-shop-widget-filter-info flex items-center justify-between">
          <span class="input-range">
           Min: {{ minValue }} 
          </span>
          <button
            @click="handlePriceFilter"
            class="font-normal text-sm text-black bg-gray-100 px-6 py-2 hover:text-white hover:bg-black"
            type="button"
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const minValue = 100
  const maxValue = 500
  const value = ref(50)
  </script>
  