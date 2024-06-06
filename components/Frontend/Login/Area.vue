<template>
    <div class="flex justify-center lg:m-20 md:m-12 sm:m-5 m-2">
        <div class="xl:w-1/3 xl:h-1/2 lg:w-1/2 lg:h-1/2 sm:w-[80%] w-[90%] shadow-lg text-center">
            <div class="heading flex gap-5 justify-center mt-7">
                <div class=" w-40">
                    <img src="/brainybuzzlong.png" alt="">
                </div>
                <div>
                    <NuxtLink to="/"class=" text-2xl group font-medium text-primary" >
                        BrainyBuzz
                        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary-600"></span>
                    </NuxtLink>
                </div>
            </div>

            <div class="py-2">
                <span class="text-xl"> Welcome 👋</span>
            </div>
            <div>
                <span class="custom-message text-gray-500"> Welcome To Brainybuzz</span>
            </div>
            <div class="px-4 pt-4">
                <div class="relative mb-8">
                    <div class="h-12 bg-white">
                        <input id="mobile" type="text" placeholder="Enter a phone number" class=" w-full h-full px-2 border border-gray-300 rounded-md text-base text-black" />
                    </div>
                    <div class=" bg-white absolute -top-3 left-2 px-1 inline-block text-base text-black-title">
                        <label for="Mobile">Mobile Number</label>
                    </div>
                    <div class="bg-primary mt-2 py-2 text-white rounded-md cursor-pointer hover:shadow-lg">
                        Send OTP
                    </div>
                    <div class=" text-gray-600 text-left mt-3">
                        OTP will be sent on email in case of non-indian mobile number.
                    </div>
                    <div class="my-1 text-left font-normal text-gray-500">
                        OTP
                    </div>
                    <div class="h-12 bg-white">
                        <input id="otp" type="text" placeholder="5472" class=" w-full h-full px-2 border rounded-md border-gray-300 text-base text-black" />
                    </div>
                    <div class=" text-white bg-primary hover:shadow-lg mt-2 py-2 rounded-md cursor-pointer">
                        Sign In
                    </div>
                    <div class=" font-extralight flex gap-2 mt-4 justify-center text-gray-500">
                        <span>New on Our Platform?</span>
                        <div>
                            <NuxtLink to="/register" class="text-primary group">Create an Account
                            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary-600"></span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>
