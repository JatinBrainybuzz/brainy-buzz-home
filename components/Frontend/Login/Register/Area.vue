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
                            <span
                                class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary-600"></span>
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
                    <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
                        <div class="relative mb-8">
                        
                            <div class="h-12 bg-white relative mb-8">
                                <!-- <input id="mobile" type="text" placeholder="Enter Your Username..."
                                    class=" w-full h-full px-2 border border-gray-300 rounded-md text-base text-black" />
                                <div class=" bg-white absolute -top-3 left-2 px-1 inline-block text-base text-black-title">
                                    <label for="Mobile">UserName</label>
                                </div> -->
                                <UFormGroup label="username" name="name">
                                    <UInput v-model="state.name"  placeholder="Enter Your Username..." />
                                </UFormGroup>
                            </div>


                            <div class="h-12 bg-white relative mb-7 ">
                                <!-- <input id="mobile" type="email" placeholder="Enter Your Email"
                                    class="w-full h-full px-2 border border-gray-300 rounded-md text-base text-black" />
                                <div class=" bg-white absolute -top-3 left-2 px-1 inline-block text-base text-black-title">
                                    <label for="Mobile">Email</label>
                                </div> -->
                                <UFormGroup label="email" name="email">
                                    <UInput v-model="state.email"  placeholder="Enter Your email..." />
                                </UFormGroup>
                            </div>
                            <div class="flex gap-2 items-center mb-7">
                                <div class=" w-1/2 border-b border-gray-300">Date Of Birth</div>
                                <!-- <input type="date" value="2024-05-13" class="w-1/2 border"> -->
                                <div class=" w-full">
                                    <UPopover :popper="{ placement: 'bottom-start' }">
                                        <UButton icon="i-heroicons-calendar-days-20-solid"
                                            :label="format(date, 'd MMM, yyy')" block />
                                        <template #panel="{ close }">
                                            <DatePicker v-model="date" is-required @close="close" />
                                        </template>
                                    </UPopover>
                                </div>

                            </div>
                            <div class="h-12 bg-white relative my-5">
                                <input id="mobile" type="text" placeholder="Enter Your Mobile Number"
                                    class="w-full h-full px-2 border border-gray-300 rounded-md text-base text-black" />
                                <div class=" bg-white absolute -top-3 left-2 px-1 inline-block text-base text-black-title">
                                    <label for="Mobile">Mobile Number</label>
                                </div>
                            </div>
                            <div class=" text-gray-600 text-left my-3">
                                OTP will be sent on email in case of non-indian mobile number.
                            </div>

                            <div class="flex gap-2 items-center my-3">
                                <input id="notification" type="checkbox" />
                                <label for="notification" class=" cursor-pointer">Allow Notification</label>
                            </div>

                            <!-- <div class="text-white bg-primary hover:shadow-lg my-2 py-2 rounded-md cursor-pointer">
                                Sign Up
                            </div> -->
                            <UButton  type="submit" color="primary" variant="solid" class="hover:shadow-lg my-2 py-2 rounded-md cursor-pointer">Sign up</UButton>
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
                    </UForm>
                </div>
            </div>
        </div>

</template>

<script setup lang="ts">
    import {
        format
    } from 'date-fns'
    import type { FormError, FormSubmitEvent } from '#ui/types'
    
    const date = ref(new Date())
    const state = reactive({
        email: undefined,
        name: undefined,
    })
    const validate = (state: any): FormError[] => {
        const errors = []
        if (!state.email) errors.push({ path: 'email', message: 'Required' })
        if (!state.name) errors.push({ path: 'name', message: 'Required' })
        return errors
    }

    async function onSubmit (event: FormSubmitEvent<any>) {
    // Do something with data
    console.log(event.data)
    }
</script>

<style scoped>

</style>