<template>
    <div class="profile__main">
         <div class="profile__main-top pb-20">
           <div class="grid md:grid-cols-2 items-center">
               <div class="col-md-6">
                 <div class="profile__main-inner sm:mb-5 flex flex-wrap items-center">
                     <div class="profile__main-thumb relative">
                       <img class="w-20 h-20 rounded-full mr-4 sm:mb-5" src="" alt="">
                       <div class="profile__main-thumb-edit">
                           <input id="profile-thumb-input" class=" hidden" type="file">
                           <label for="profile-thumb-input" 
                           class=" absolute bottom-2 right-2 text-white text-center bg-primary rounded-2xl w-8 h-8 leading-6 border-2 border-white">
                            <Icon name="material-symbols:android-camera" /></label>
                       </div>
                     </div>
                     <div class=" text-sm">
                       <h4 class=" text-xl">Welcome Mr. Admin!</h4>
                       <p>You have <span>08</span> notifications</p>
                     </div>
                 </div>
               </div>
               <div class="">
                 <div class="profile__main-logout text-right">
                     <nuxt-link href="/" class="tp-logout-btn px-3 py-2 bg-white text-black border rounded-md">Logout</nuxt-link>
                 </div>
               </div>
           </div>
         </div>
         <div class="profile__main-info">
           <div class="grid gap-3 grid-cols-2 md:grid-cols-4">
               <div class="">
                 <div class="profile__main-info-item lg:p-[22px 0 20px] border border-solid border-gray-200 text-center pl-[27px] py-[30px] pr-[25px] md:mb-6">
                     <div class="relative mb-4">
                       <span class="relative inline-block w-14 h-14 leading-[60px] text-center">
                           <span class="profile-count">2</span>
                           <Icon name="streamline:interface-download-square-arrow-down-download-internet-network-server-square-upload" size="60px" />
                       </span>
                     </div>
                     <h4 class="profile__main-info-title">Downlaods</h4>
                 </div>
               </div>
               <div class="col-md-3 col-sm-6">
                 <div class="profile__main-info-item lg:p-[22px 0 20px] border border-solid border-gray-200 text-center pl-[27px] py-[30px] pr-[25px] md:mb-6">
                     <div class="relative mb-4">
                       <span class="relative inline-block w-14 h-14 leading-[60px] text-center">
                           <span class="profile-count profile-order">5</span>
                           <ClientOnly>
                             <Icon name="lucide:boxes" size="60px" />
                           </ClientOnly>
                       </span>
                     </div>
                     <h4 class="profile__main-info-title">Orders</h4>
                 </div>
               </div>
               <div class="col-md-3 col-sm-6">
                 <div class="profile__main-info-item lg:p-[22px 0 20px] border border-solid border-gray-200 text-center pl-[27px] py-[30px] pr-[25px] md:mb-6">
                     <div class="relative mb-4">
                       <div class="relative inline-block w-14 h-14 leading-[60px] text-center">
                           <span class="profile-count profile-wishlist">10</span>
                           <ClientOnly>
                             <Icon name="solar:heart-angle-outline" size="60px" />
                           </ClientOnly>
                       </div>
                     </div>
                     <h4 class="profile__main-info-title">Wishlist</h4>
                 </div>
               </div>
               <div class="col-md-3 col-sm-6">
                 <div class="profile__main-info-item lg:p-[22px 0 20px] border border-solid border-gray-200 text-center pl-[27px] py-[30px] pr-[25px] md:mb-6">
                     <div class="relative mb-4">
                       <span class="relative inline-block w-14 h-14 leading-[60px] text-center ">
                           <span class="profile-count profile-wishlist">07</span>
                           <ClientOnly>
                             <Icon name="mdi:gift-open-outline" size="60px" />
                           </ClientOnly>
                       </span>
                     </div>
                     <h4 class="profile__main-info-title ">Gift Box</h4>
                 </div>
               </div>
           </div>
         </div>
    </div>
   </template>
   
   <script setup>
   
   </script>
   