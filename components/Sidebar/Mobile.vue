<template>
    <div class="fixed top-0 p-4 w-full h-full -z-10 left-0 bg-white overflow-y-auto">
        <div class="p-1">
            <div class="grid  grid-cols-3">
                <div class=" col-span-2 text-start font-semibold">
                    <span class=" text-xl text-primary">My Profile </span>
                </div>
                <div class=" text-end text-primary cursor-pointer col-span-1" @click="$emit('close')" >
                    <Icon name="gridicons:cross-circle" size="1.5rem"/>
                </div>
            </div>
            <div class="welcome-card px-4 py-4 bg-primary rounded-lg mt-4 flex items-center justify-between">
                <div class="shrink w-2/3">
                    <h2 class="text-white mb-4 text-lg">Welcome to NBN
                        <!-- {{defaultData.default_project_name ? defaultData.default_project_name : 'NBN'}} -->
                    👋 </h2>
                </div>
                <div class="right-section">
                    <span class=" text-xs px-2 py-1 bg-white text-black rounded block">Login/Signup</span>
                </div>
            </div>
            <div class="mt-2 divide-y ">
                <div class="Account text-start">
                    <h2 class=" text-primary text-2xl mb-2">My Account</h2>
                    <div class="flex items-center ml-2">
                        <Icon name="material-symbols:account-circle-full" class="mr-2" />
                        <span class="text-ms">My Profile</span>
                    </div>
                    <div class="flex items-center ml-2 mt-2">
                        <Icon name="material-symbols:add-location-alt-rounded" class="mr-2" />
                        <span class="text-ms">Address</span>
                    </div>
                    <div class="flex items-center ml-2 mt-2">
                        <Icon name="material-symbols:order-approve-sharp" class="mr-2" />
                        <span class="text-ms">Orders</span>
                    </div>
                    <div class="flex items-center ml-2 my-2">
                        <Icon name="ri:information-2-line" class="mr-2" />
                        <span class="text-ms">Information</span>
                    </div>
                </div>
                <div class="Account text-start">
                    <h2 class=" text-primary text-2xl mb-2">Benzora Fashion</h2>
                    <div class="flex items-center ml-2">
                        <Icon name="material-symbols:account-circle-full" class="mr-2" />
                        <span class="text-ms">About Us</span>
                    </div>
                    <div class="flex items-center ml-2 mt-2">
                        <Icon name="material-symbols:lab-profile-outline" class="mr-2" />
                        <span class="text-ms">Privacy Policy</span>
                    </div>
                    <div class="flex items-center ml-2 mt-2">
                        <Icon name="material-symbols:unknown-document-rounded" class="mr-2" />
                        <span class="text-ms">Terms of Use</span>
                    </div>
                    <div class="flex items-center ml-2 my-2">
                        <Icon name="ri:information-2-line" class="mr-2" />
                        <span class="text-ms">Information</span>
                    </div>
                </div>
                <div class="Account text-start mb-2">
                    <h2 class=" text-primary text-2xl mb-2">Need help</h2>
                    <div class="flex items-center ml-2">
                        <Icon name="lucide:contact-round" class="mr-2" />
                        <span class="text-ms">Contact Us</span>
                    </div>
                    <div class="flex items-center ml-2">
                        <Icon name="icon-park-outline:history-query" class="mr-2" />
                        <span class="text-ms">Our Story</span>
                    </div>
                </div>
                <div class="Account text-start mb-2">
                    <h2 class=" text-primary text-2xl mb-2">Others</h2>
                    <div class="flex items-center ml-2">
                        <Icon name="fluent:document-one-page-sparkle-16-regular" class="mr-2" />
                        <span class="text-ms">Blog</span>
                    </div>
                </div>
                <div class="text-primary">
                    <span class="text-2xl my-2">Show Us Some Love <Icon name="material-symbols:favorite" /> </span>
                    <div class="flex justify-evenly my-3">
                        <Icon name="ic:outline-facebook" size="2rem" />
                        <Icon name="mdi:instagram" size="2rem" />
                        <Icon name="bi:youtube" size="2rem" />
                        <Icon name="ic:baseline-whatsapp" size="2rem" />
                        <Icon name="mdi:linkedin" size="2rem" />
                        <Icon name="mdi:pinterest" size="2rem" />
                    </div>
                </div>
                <div class="flex-col flex">
                    <span>Version 1.2 beta</span>
                    <span>Powered By <img src="/public/brainybuzzlong.png"> </span>
                </div>
                <div class=" bg-white w-full h-[40px]">

                </div>
            </div>


        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
 body {
    overflow-y: hidden;
  position: fixed;
 }
 </style>
