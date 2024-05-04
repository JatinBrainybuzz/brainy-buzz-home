<template>
    <div class="tp-shop-widget-content">
      <div class="tp-shop-widget-categories">
        <ul>
          <li v-for="(category, i) in data" :key="i">
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

console.log(data)
  </script>
  