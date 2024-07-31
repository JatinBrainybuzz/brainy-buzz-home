<template>
        <div class="flex justify-center lg:m-20 md:m-12 sm:m-5 m-2">
            <div v-if="isAllowed" class="xl:w-1/3 xl:h-1/2 lg:w-1/2 lg:h-1/2 sm:w-[80%] w-[90%] shadow-lg text-center">
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
                <div class="px-4 pt-4">
                    <UForm :validate="validate" :state="state" class="space-y-4" @submit="submitForm" @error="onError">
                        <div class="relative mb-8">
                        
                            <div class="h-12 bg-white relative mb-9">
                                <!-- <input id="mobile" type="text" placeholder="Enter Your Username..." v-model="state.name"
                                    class=" w-full h-full px-2 border border-gray-300 rounded-md text-base text-black" />
                                <div class=" bg-white absolute -top-3 left-2 px-1 inline-block text-base text-black-title">
                                    <label for="Mobile">UserName</label>
                                </div> -->
                                <UFormGroup label="UserName" name="name" required class="text-start">
                                    <UInput icon="i-heroicons-user-circle-16-solid"
                                    v-model="state.name"  placeholder="Enter Your Username..." />
                                </UFormGroup>
                            </div>

                            <div class="h-12 bg-white relative mb-10 ">
                                <!-- <input id="mobile" type="email" placeholder="Enter Your Email" v-model="state.email" @input="validate"
                                    class="w-full h-full px-2 border border-gray-300 rounded-md text-base text-black" />
                                <div class=" bg-white absolute -top-3 left-2 px-1 inline-block text-base text-black-title">
                                    <label for="Mobile">Email</label>
                                </div> -->
                                <UFormGroup label="Email" name="email" required class="text-start">
                                    <UInput v-model="state.email" icon="i-heroicons-envelope"
                                    placeholder="Enter Your Email..." />
                                </UFormGroup>
                                
                            </div>
                            <div class="flex gap-2 items-center mb-7">
                                <div class=" w-1/2 border-b border-gray-300">Date Of Birth</div>
                                <!-- <input type="date" value="2024-05-13" class="w-1/2 border"> -->
                                <div class=" w-full">
                                    <UPopover :popper="{ placement: 'bottom-start' }">
                                        <UButton icon="i-heroicons-calendar-days-20-solid" :label="format(state.Newdate, 'd MMM, yyy')" block />
                                        <template #panel="{ close }">
                                            <DatePicker v-model="state.Newdate" is-required @close="close" />
                                        </template>
                                        <!-- :label="format(date, 'd MMM, yyy')"  -->
                                    </UPopover>
                                </div>
                            </div>
                            <div class="h-15 bg-white relative my-5">
                                <!-- <input id="mobile" type="text" placeholder="Enter Your Mobile Number" v-model="state.phone"
                                    class="w-full h-full px-2 border border-gray-300 rounded-md text-base text-black" />
                                <div class=" bg-white absolute -top-3 left-2 px-1 inline-block text-base text-black-title">
                                    <label for="Mobile">Mobile Number</label>
                                </div> -->
                                <UFormGroup label="Mobile Number" required name="mobile_number" class="text-start mb-5">
                                    <vueTelInput :autoFormat="false" type="number" v-on:space="filterMobileInput()"
                                     v-on:country-changed="countryChanged"
                                    :defaultCountry="state.country" v-model="state.mobile_number" @validate="validatePhone" />
                                </UFormGroup>
                            </div>
                            <div class=" text-gray-600 text-left mb-4">
                                OTP will be sent on email in case of non-indian mobile number.
                            </div>

                            <div class="flex gap-2 items-center my-3">
                                <input id="notification" type="checkbox" />
                                <label for="notification" class=" cursor-pointer">Allow Notification</label>
                            </div>

                            <!-- <div class="text-white bg-primary hover:shadow-lg my-2 py-2 rounded-md cursor-pointer" @click="submitForm">
                                Sign Up
                            </div> -->
                            <div class="text-center">
                                <UButton  type="submit" color="primary" variant="solid" class="hover:shadow-lg w-full text-base justify-center rounded-md cursor-pointer">
                                Sign up</UButton>
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
                    </UForm>
                </div>
            </div>
            <div v-if="!isAllowed" class="xl:w-1/3 xl:h-1/2 lg:w-1/2 lg:h-1/2 sm:w-[80%] w-[90%] shadow-lg text-center">
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
                            <input id="mobile" type="text" placeholder="Please Enter Your OTP" aria-required="true" v-model="state.otp"
                                class=" w-full group h-full px-2 border border-gray-300 rounded-md text-base text-black" />
                            <div class=" bg-white group-hover:-top-9 absolute -top-4 left-2 px-1 inline-block text-base text-black-title">
                                <label for="Mobile">Please Enter your OTP</label>
                            </div>
                        </div>

                        <div class="text-white bg-primary hover:shadow-lg my-4 py-2 rounded-md cursor-pointer" @click="submitOtp">
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

<script setup lang="ts">
    import {
        format,
        isValid
    } from 'date-fns'
    import type { FormError,FormErrorEvent, FormSubmitEvent } from '#ui/types'

    const isAllowed = ref(true);

    const state = reactive({
        email: undefined,
        name: undefined,
        mobile_number: '',
        country: '',
        Newdate: new Date(),
        otp: ''
    })

    interface PhoneObject {
        valid: boolean;
        nationalNumber: string;
        }

    const validate = (state: any): FormError[] => {
        const errors = []
        if (!state.email) {
            errors.push({ path: 'email', message: 'Required' })
        }
        if (!isNumberValid.value) {
            errors.push({ path: 'mobile_number', message: 'Correct Number Required' });
        }
        if (!state.name) errors.push({ path: 'name', message: 'Required' })
        return errors
    }
    const isNumberValid = ref(false);
    function filterMobileInput() {
                var newNumber = state.mobile_number.replace(/\D/g, '').slice(-10);
                state.mobile_number = newNumber;
            }


    function validatePhone(object:PhoneObject) {
        if (object.valid === true) {
            isNumberValid.value = true;
        }
    }

    function countryChanged(country:any) {
                state.country = country.dialCode
                // this.form.country_iso = country.iso2
                // this.form.country_name = country.name
            }

    async function onError (event: FormErrorEvent) {
    const element = document.getElementById(event.errors[0].id)
    element?.focus()
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    
    function formatDate(date:Date): String {
        return format(date, 'yyyy-MM-dd');
    }
    
        const config = useRuntimeConfig();
  
        const submitForm = () => {
        const formattedDate = formatDate(state.Newdate);
        const data:any = $fetch(config.public.appUrl+"api/register", {
            method: 'post',
            body: {
                name: state.name,
                email: state.email,
                country: state.country,
                date_of_birth: formattedDate,
                mobile_number: state.mobile_number
            }
        }).then((data: any) => {
            console.log(data);
        if (data.msg91 === 'success') {
            isAllowed.value = false;
        } else{
            console.error('SOmething went wrong: ', data)
        }
    }).catch((error: any) => {
        console.error('when submitting form got error: ', error);
    });
    
        }
    // const {  data: items } = await useLazyFetch(HOMEPAGE_API);

    async function onSubmit (event: FormSubmitEvent<any>) {
    // Do something with data
    console.log(event.data)
    }

    const router = useRouter();

    // Submit the OTP 
    const submitOtp = () => {
        const data:any = $fetch(config.public.appUrl+"/api/verify-otp", {
            method: 'post',
            body: state
        }).then((res :any) =>{
            if (res.data.type == "success") {
                localStorage.setItem('customerData', JSON.stringify(res.data.user))
                localStorage.setItem('customerToken', (res.data.token))
                const guestCartItemToken = localStorage.getItem('is_guest_token')
                if (guestCartItemToken) {
                    router.push({
                        name: 'checkout'
                    }).catch((e:any) => {
                        console.log(e);
                    });
                }else if (res.data.is_android_app == 'true') {
                    window.location.href = window.location.origin +'/mobile-app-homepage/' + res.data.token;
                }else {
                    router.push({
                        name: 'home'
                    }).catch((e:any) => {
                        console.log(e);
                    });
                }}
    }).catch((error: any) => {
        console.error('when submitting form got error: ', error);
    });
    }

</script>