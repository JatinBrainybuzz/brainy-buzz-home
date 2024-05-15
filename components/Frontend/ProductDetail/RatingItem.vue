<template>
    <div class=" text-base mr-2 flex items-center">
      <span class="mr-2">{{ star }} Star</span>
      <div class="bg-gray-200 h-2 w-64 relative mr-3">
        <span
          class="h-full bg-yellow-400 inline-block absolute top-0 left-0"
          :data-width="`${width}%`"
          :style="`width: ${width}%;`"
        ></span>
      </div>
      <div class="text-base">
        <span>{{width}}%</span>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    star: Number,
    width: String
  });
  </script>
  