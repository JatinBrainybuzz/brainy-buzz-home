<template>
    <form >
      
      <div
        class=" mb-7 flex items-center"
      >
        <p class="mb-0 text-sm mr-2">Your Rating :</p>
        <div
          class=" text-xs text-yellow-400 flex items-center"
        >
          <span><Icon name="material-symbols-light:kid-star-sharp" /></span>
          <span><Icon name="material-symbols-light:kid-star-sharp" /></span>
          <span><Icon name="material-symbols-light:kid-star-sharp" /></span>
          <span><Icon name="material-symbols-light:kid-star-sharp" /></span>
          <span><Icon name="material-symbols-light:kid-star-sharp" /></span>
        </div>
      </div>
      <div class="mb-3">
        <div class="relative mb-7">
          <div class="tp-product-details-review-input">
            <Field name="message">
              <textarea id="message" name="message" class=' h-64 resize-none w-full border border-gray-300 p-2' placeholder="Write your message here..."></textarea>
            </Field>
          </div>
          <div class="">
            <label class=" text-sm text-gray-700 absolute -top-[15px] left-5 py-1 bg-white leading-4" for="message">Write Review</label>
          </div>
        </div>
        <div class="tp-product-details-review-input-box relative mb-7">
          <div class="tp-product-details-review-input">
            <input
              name="name"
              id="name"
              type="text"
              placeholder="Shahnewaz Sakil"
              class=" h-14 bg-white border text-sm text-black w-full px-2"
            />
          </div>
          <div class="">
            <label class=" text-sm text-gray-700 absolute -top-[15px] left-5 py-1 bg-white leading-4" for="name">Your Name</label>
          </div>
        </div>
        <div class="tp-product-details-review-input-box relative mb-7">
          <div class="tp-product-details-review-input relative">
            <input
              name="email"
              id="email"
              type="email"
              class=" h-14 bg-white border text-sm text-black w-full px-2"
              placeholder="Brainybuzz@mail.com"
            />
          </div>
          <div class="">
            <label class="text-sm text-gray-700 absolute -top-[15px] left-5 py-1 bg-white leading-4" for="email">Your Email</label>
          </div>
        </div>
      </div>
      <div class=" mb-5">
        <div class="tp-product-details-review-remeber">
          <input  id="remeber" type="checkbox" />
          <label  class="cursor-pointer relative z-10 text-gray-700 pl-4" for="remeber">Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>
      </div>
      <div class="mb-1">
        
          <button type="submit" class="font-medium text-base text-white py-2 px-11 bg-primary">Submit</button>
      </div>
    
    </form>
  </template>
  
  <script setup>
  </script>