<template>
    <div class="container md:px-[10%]">
        <div class=" text-3xl font-semibold text-start mb-8">
            Sent A Message
        </div>
        <div class="relative mb-8">
          <div class="h-14 bg-white border border-gray-300 text-base text-black">
            <input id="name" type="text" placeholder="Jatin Kumar" class=" w-full h-full px-2" />
          </div>
          <div class=" bg-white absolute -top-4 left-2 px-1 inline-block text-base text-black-title">
            <label for="name">Your Name</label>
          </div>
        </div>
        <div class="relative mb-8">
          <div class="h-14 bg-white border border-gray-300 text-base text-black">
            <input id="email" type="email" placeholder="Brainybuzz@mail.com" class=" w-full h-full px-2" />
          </div>
          <div class=" bg-white absolute -top-4 left-2 px-1 inline-block text-base text-black-title">
            <label for="email">Your Email</label>
          </div>
        </div>
        <div class="relative mb-8">
          <div class="h-14 bg-white border border-gray-300 text-base text-black">
            <input id="subject" type="text" placeholder="Write your subject" class=" w-full h-full px-2" />
          </div>
          <div class=" bg-white absolute -top-4 left-2 px-1 inline-block text-base text-black-title">
            <label for="email">Your Subject</label>
          </div>
        </div>
        <div class="relative mb-8">
          <div class=" bg-white border border-gray-300 text-base text-black">
            <textarea placeholder="Write your message here ..." class="w-full h-52 px-2 py-2 resize-none bg-white"></textarea>
        </div>
          <div class=" bg-white absolute -top-4 left-2 px-1 inline-block text-base text-black-title">
            <label for="email">Your message</label>
          </div>
        </div>
        <div class="flex gap-3 mb-8">
            <input type="checkbox" id="checkbox">
            <label for="checkbox" class=" cursor-pointer"> Save my name, email, and website in this browser for the next time I comment.</label>
        </div>
        <div class="text-start mb-8">
            <span class=" text-white bg-black text-lg px-5 py-3">Send Message</span>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>