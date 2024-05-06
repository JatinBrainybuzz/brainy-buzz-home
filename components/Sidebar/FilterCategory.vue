<template>
    <div class="tp-shop-widget-content">
      <div class=" h-72 overflow-y-scroll no-scrollbar pr-10">
        <ul class="divide-y ml-4">
          <li v-for="(category, i) in items.data" :key="i" class="my-2 hover:text-primary hover:scale-110">
            <a
              class="cursor-pointer"
            >
              {{ category.name }}
              <span>{{ category.length }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
<script setup >
    const items = defineProps({
    data: Array
  })

// console.log(data)
  </script>
  