<template>
    <div class="relative mx-auto">
      <div class="flex justify-center">
        <div class="flex">
        <div class=" inline-block w-4 text-lg mr-3">
          
            <UIcon name="material-symbols:mark-email-read-outline" dynamic />
            
        </div>
        <ClientOnly>
          <div class="text-base leading-loose">
            <p>{{address?.default_email}}</p>
          </div>
        </ClientOnly>
        </div>
      </div>
      <div class="flex justify-center ml-2">
        <div class="inline-block w-4 text-lg mx-3">
          
            <UIcon name="material-symbols:add-location-alt-outline-rounded"class="ml-2" dynamic/>
            
        </div>
        <div class="text-base leading-loose">
          <ClientOnly>
            <p>
                {{address?.default_street_address}} {{ address?.default_zipcode }}
            </p>
          </ClientOnly>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps(['address'])
</script>