<template>
  <div class="text-primary px-2">
    <!-- Facebook Link -->
     <div class=" flex gap-3 my-3 mx-1 justify-center items-center">
      <!-- Facebook  -->
       <div v-if="social?.facebook_link != null && social?.facebook_link != 'Null'" class=" text-blue-600">
        <NuxtLink :to="social?.facebook_link">
          <Icon name="mdi:facebook" size="2rem"   />
        </NuxtLink>
       </div>
       <div v-if="social?.instagram_link != null && social?.instagram_link != 'Null'" class=" text-pink-500">
        <NuxtLink :to="social?.instagram_link">
            <Icon name="mage:instagram-square" size="2rem" />
        </NuxtLink>
       </div>
       <div v-if="social?.twitter_link != null && social?.twitter_link != 'Null'" class=" text-blue-500">
        <NuxtLink :to="social?.twitter_link">
          <Icon name="ph:twitter-logo-duotone" size="2rem"  />
        </NuxtLink>
       </div>
       <div v-if="social?.linkedin_link != null && social?.linkedin_link != 'Null'" class=" text-blue-500">
        <NuxtLink :to="social?.linkedin_link">
          <Icon name="akar-icons:linkedinv1-fill" size="1.8rem"   />
        </NuxtLink>
       </div>
       <div v-if="social?.youtube_link != null && social?.youtube_link != 'Null'" class=" text-red-500">
        <NuxtLink :to="social?.youtube_link">
          <Icon name="ion:logo-youtube" size="2rem"   />
        </NuxtLink>
       </div>
       <div v-if="social?.whatsapp_link != null && social?.whatsapp_link != 'Null'" class=" text-green-500">
        <NuxtLink :to="social?.whatsapp_link">
          <Icon name="uim:whatsapp" size="2rem"   />
        </NuxtLink>
       </div>
       <div v-if="social?.pinterest_link != null && social?.pinterest_link != 'Null'" class=" text-red-500">
        <NuxtLink :to="social?.pinterest_link">
          <Icon name="mdi:pinterest" size="2rem"  />
        </NuxtLink>
       </div>

     </div>
  </div>
  </template>
  
  <script setup>

const props = defineProps(['social'])
 
//   console.log(social_data)
  </script>
  