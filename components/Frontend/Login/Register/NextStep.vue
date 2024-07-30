<template>
    <div class="flex justify-center lg:m-20 md:m-12 sm:m-5 m-2">
        <div class="xl:w-1/3 xl:h-1/2 lg:w-1/2 lg:h-1/2 sm:w-[80%] w-[90%] shadow-lg text-center">
            <div class="heading flex gap-5 justify-center   ">
                <div class=" w-40">
                    <img src="/brainybuzzlong.png" alt="">
                </div>
                <div>
                    <NuxtLink :to="{name: 'home'}" class=" text-2xl group font-medium text-primary">
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
            <div class="px-6 pt-6">
                    <div class="relative mb-8">
                        <div class="h-10 bg-white relative mb-7">
                            <input id="mobile" type="text" placeholder="Please Enter Your OTP" aria-required="true" v-model="OTP"
                                class=" w-full group h-full px-2 border border-gray-300 rounded-md text-base text-black" />
                            <div class=" bg-white group-hover:-top-9 absolute -top-4 left-2 px-1 inline-block text-base text-black-title">
                                <label for="Mobile">Please Enter your OTP</label>
                            </div>
                        </div>

                        <div class="text-white bg-primary hover:shadow-lg my-4 py-2 rounded-md cursor-pointer" @click="submitForm">
                            Submit
                        </div>

                        <div class="h-12 bg-white relative mb-3">
                            <label class="text-gray-600 ">
                                If you didn't receive the OTP, please click the below button.
                            </label>
                            
                        </div>
                        <div class="text-center mb-5">
                            <UButton  type="submit" color="primary" variant="solid" class="hover:shadow-lg w-full text-base justify-center rounded-md cursor-pointer">
                            Resend OTP</UButton>
                        </div>
                        <div class=" text-gray-600 mb-5">
                            Please check your email for the OTP sent from no-reply@brainybuzz.app. If you don't see it in your inbox, kindly check your spam folder.
                        </div>
                        <div class=" font-extralight flex gap-2 mt-4 justify-center">
                            <span>Already Have an Account?</span>
                            <div>
                                <NuxtLink :to="{name: 'login'}" class="text-primary group">Sign In Instead
                                    <span
                                        class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary-600"></span>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const OTP = ref('')
const config = useRuntimeConfig();
const submitForm = () => {
        const data = $fetch(config.public.appUrl+"api/register", {
            method: 'post',
            body: {
                OTP: .name,
            }
        }
    )
}
</script>