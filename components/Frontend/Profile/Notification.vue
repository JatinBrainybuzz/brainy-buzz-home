<template>
    <div class=" flex flex-col">
        <div class="mb-30 text-start">
          <h3 class=" text-2xl mb-2 text-black font-semibold">My activity settings</h3>
          <p class=" text-sm text-gray-600 mt-4">Stay up to date with notification on activity that involves you including mentions, messages, replies to your bids, new items, sale and administrative updates </p>
        </div>
        <div class="mt-4 lg:mt-7 flex-col flex items-start justify-start gap-5">
            <div class="flex gap-5 items-center">
                <UToggle v-model="like" />
                <label for="" class=" text-base cursor-pointer" @click="handleLike">Like & Follows Notifications</label>
            </div>
            <div class="flex gap-5 items-center">
                <UToggle v-model="comment" />
                <label for="" class=" text-base cursor-pointer" @click="handleComment">Post, Comments & Replies Notifications</label>
            </div>
            <div class="flex gap-5 items-center">
                <UToggle v-model="product" />
                <label for="" class=" text-base cursor-pointer" @click="handleProduct">New Product Notifications</label>
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
  const like = ref(false)
  const comment = ref(false)
  const product = ref(false)
  const handleLike = ()=> like.value = !like.value;
  const handleComment = ()=> comment.value = !comment.value;
  const handleProduct = ()=> product.value = !product.value;

  </script>
  
  