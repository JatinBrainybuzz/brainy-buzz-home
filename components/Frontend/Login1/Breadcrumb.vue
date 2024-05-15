<template>
    <section :class="`breadcrumb__area bg-white ${center ? 'text-center' : ''} pt-6 pb-3 bg-gray-200`">
      <div class="container">
        <div class="grid grid-cols-1">
          <div>
            <div class="breadcrumb__content relative z-[1]">
              <h3 class="font-medium text-2xl mb-2 leading-none">{{title}}</h3>
              <div class="relative font-normal text-gray-600 text-base">
                <span class="mr-2"><nuxt-link href="/">Home</nuxt-link></span>->
                <span>{{subtitle}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
 const props = defineProps({
    title: String,
    subtitle: String,
    center: Boolean,
    bg_clr: Boolean,
  });
  </script>
  