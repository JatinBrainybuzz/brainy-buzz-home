<template>
    <section class="breadcrumb__area breadcrumb__style-2 mb-7 bg-center bg-cover bg-no-repeat pt-1/2 pb-1/4">
      <div class="container">
          <div class="grid grid-cols-1">
            <div>
                <div class="breadcrumb__content relative z-[1]">
                  <div class="breadcrumb__list">
                      <span class="breadcrumb-icon font-normal text-base relative pr-3 mr-1">
                        <Icon name="material-symbols:home" />
                      </span>
                      <span class="font-normal text-base relative pr-3 mr-1">
                        <NuxtLink :to="{name: 'home'}">Home</NuxtLink>
                      </span>   
                      <span v-if="Category" class="font-normal text-base relative pr-3 mr-1"><NuxtLink> {{ Category }}    </NuxtLink></span>
                      <span v-if="subcategory" class="font-normal text-base relative pr-3 mr-1"><NuxtLink to="#"> {{ subcategory }} </NuxtLink></span>
                      <span class="font-normal text-base relative"><NuxtLink :to="router.fullPath" >{{title}}</NuxtLink></span>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </section>
  </template>
  
  <script setup >
   const props = defineProps(['Category', 'title', 'subcategory'])
   const router = useRoute()
  </script>  