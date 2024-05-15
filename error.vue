<template>
    <nuxt-layout name="default">
      <section class=" pt-24 pb-28">
        <div class="container">
          <div class="flex gap-4 justify-center items-center">
            <div class="text-center">
              
                <div class=" flex justify-center">
                  <img src="/error.png" alt="error" />
                </div>
    
                <h5 class=" text-3xl md:text-4xl lg:text-5xl mb-5">{{ error.statusCode }} {{ error.statusMessage }}</h5>
                <p class="text-base leading-6 md:px-20 p-0 mb-7">
                  Whoops, this is embarassing. Looks like the page you were looking
                  for wasn't found.
                </p>
    
                <nuxt-link href="/" class="btn">Back to Home</nuxt-link>
            </div>
            
          </div>
        </div>
      </section>
    </nuxt-layout>
  </template>
  
  <script setup>
  useSeoMeta({ title: "Error Page" });
  defineProps(["error"]);
  </script>
  