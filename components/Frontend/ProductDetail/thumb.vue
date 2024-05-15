<template>
    <div class="tp-product-details-thumb-wrapper tp-tab sm:flex">
      <nav>
        <div
          class="nav nav-tabs sm:flex-col"
          id="productDetailsNavThumb"
          role="tablist"
        >
        <img class="border border-gray-900 border-opacity-30" src="/bbLogo.png" alt="hello" />
          <!-- <button
            v-for="(item, i) in product.imageURLs"
            :key="i"
            @click="productStore.handleImageActive(item.img)"
            :class="`nav-link ${item.img === productStore.activeImg ? 'active' : ''}`"
          >
            <img :src="item.img" alt="nav-img" />
          </button> -->
        </div>
      </nav>
      <div class="tab-content m-img" id="productDetailsNavContent">
        <div>
          <div
            class=" relative mb-3 bg-gray-100"
          > 
          <img class="border w-full border-gray-900 border-opacity-30" src="/bbLogo.png" alt="hello" />
            <!-- <img :src="productStore.activeImg" alt="prd-image" />
            <div v-if="product.videoId" class="tp-product-details-thumb-video">
              <a
                
                class="tp-product-details-thumb-video-btn cursor-pointer popup-video"
              >
              @click="utilsStore.playVideo(product.videoId)"
                <i class="fas fa-play"></i>
              </a>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  
    <!-- modal video component -->
    <!-- <modal-video v-if="product.videoId" /> -->
    <!-- modal video component -->
  </template>
  
  <script setup>
  
  </script>
  