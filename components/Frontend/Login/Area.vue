<template>
    <div>
        <FrontendLoader v-if="loader" />
        <div class="flex justify-center lg:p-20 md:p-12 sm:p-5 p-2">
            <div class="xl:w-1/3 xl:h-1/2 lg:w-1/2 lg:h-1/2 sm:w-[80%] w-[90%] shadow-lg text-center">
                <div class="heading flex gap-5 justify-center mt-7">
                    <div class=" w-40">
                        <img src="/brainybuzzlong.png" alt="">
                    </div>
                    <div>
                        <NuxtLink :to="{name: 'home'}" class=" text-2xl group font-medium text-primary" >
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

                        <vueTelInput :autoFormat="false" type="number" v-on:space="filterMobileInput()"
                                        v-on:country-changed="countryChanged"
                                        :defaultCountry="form.country" v-model="form.mobile_number" />
                                        <div v-if="v$.mobile_number.$error" class=" text-red-500 text-s text-start">
                                                <small>Mobile Number Is Required</small>
                                        </div>
                                        
                        <div class="w-full" >
                            <button class="bg-primary mt-2 py-2 text-white w-full rounded-md cursor-pointer disabled:bg-primary-800 hover:shadow-lg" :disabled="disableMobileInput"  @click="sendOtp">
                                {{ btnText }}
                            </button>
                        </div>
                        <div class=" text-gray-600 text-center mt-4">
                            OTP will be sent on email in case of non-indian mobile number.
                        </div>
                        <div class="my-1 text-left font-normal text-gray-500">
                            OTP
                        </div>
                        <div class="h-10 bg-white mb-4">
                            <input id="otp" type="text" v-model="form.otp" placeholder="5472" class=" w-full h-full px-2 border rounded-md border-gray-300 text-base text-black" />
                            <div v-if="vv$.otp.$error" class=" text-red-500 text-s text-start">
                                                <small>OTP Is Required</small>
                                        </div>
                        </div>
                        <div class="w-full">
                            <button :disabled='isDisabled' class="text-white bg-primary disabled:bg-primary-800 w-full hover:shadow-lg mt-2 py-2 rounded-md cursor-pointer" @click="varifyOtp">
                                Sign In
                            </button>
                        </div>
                        <div class=" font-extralight flex gap-2 mt-4 justify-center text-gray-500">
                            <span>New on Our Platform?</span>
                            <div>
                                <NuxtLink :to="{name: 'register'}" class="text-primary group">Create an Account
                                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary-600"></span>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useVuelidate } from '@vuelidate/core'
import { required} from '@vuelidate/validators'

const form = reactive({
    otp: '',
    country: '',
    mobile_number: ''

})

const btnText = ref('Send OTP');
const disableMobileInput = ref(false);
const loader = ref(false);
const config = useRuntimeConfig();
const isDisabled = ref(true);
const countDown = ref(60);
const nuxtApp = useNuxtApp()

const rules = computed( () => {
    return {
    country: {required},
    mobile_number: {required}
    }
    });

    const extraRules = {
        otp : {required}
    }


   function countDownTimer() {
            if (countDown.value > 0) {
                setTimeout(() => {
                    countDown.value -= 1
                    countDownTimer()
                }, 1000)
                btnText.value = 'Resend OTP In' + ' ' + countDown.value + ' ' + 'Sec';
                if (countDown.value == 1) {
                    disableMobileInput.value = false;
                    btnText.value = 'Send OTP';
                }
            }
        }


function countryChanged(country) {
                form.country = country.dialCode
            }

function filterMobileInput() {
                var newNumber = form.mobile_number.replace(/\D/g, '').slice(-10);
                form.mobile_number = newNumber;
            }

const v$ = useVuelidate(rules, form);
const vv$ = useVuelidate(extraRules, form);
const $router = useRouter();

const sendOtp = async () =>{
    const variefy = await v$.value.$validate();
   
    if(variefy){
        try {
            loader.value = true;
        const data = await $fetch(config.public.appUrl+"/api/send-otp", {
            method: 'post',
            body: form
        })
        console.log(data);
        if (data.type == "user_not_found") {
            nuxtApp.$sendNotification('User Not Registered!', 'top-right', 3000, 'warning');
            loader.value = false;
                localStorage.setItem('new_registration_number', form.mobile_number);
                localStorage.setItem('new_country_code', form.country);
                $router.push({
                    name: 'register'
                })
            } 
        if (data.type == "success") {
            nuxtApp.$sendNotification('OTP sent Successfully!', 'top-right', 3000, 'success');
                countDown.value = 60;
                disableMobileInput.value = true;
                countDownTimer();
                isDisabled.value = false;
                loader.value = false;
                // $toast({
                //     component: ToastificationContent,
                //     props: {
                //         title: data.message,
                //         icon: 'EditIcon',
                //         variant: 'success',
                //     },
                // })
            } 
            
        else if (data.type == "error") {
            nuxtApp.$sendNotification('Something went Wrong. Please Try Again!', 'top-right', 3000, 'error');
                isDisabled.value = false;
                loader.value = false;
                // $toast({
                //     component: ToastificationContent,
                //     props: {
                //         title: data.message,
                //         icon: 'EditIcon',
                //         variant: 'danger',
                //     },
                // })
            }
        }
        catch (error) {
            loader.value = false;
            nuxtApp.$sendNotification('Error Sending OTP. Please try again!', 'top-right', 3000, 'error');
            console.error("Error sending OTP:", error);
        }
    }
    else {
        console.log(variefy)
        return variefy
    }
}

const varifyOtp = async () => {
    const variefy = await vv$.value.$validate();
    if(variefy){
        try {
            loader.value = true;
        const data = await $fetch(config.public.appUrl+"/api/login", {
            method: 'post',
            body: form
        })
            if (data.type == "error") {
                nuxtApp.$sendNotification('Otp is not Matched.', 'top-right', 3000, 'error');
                console.log('error')
                loader.value = false
                // this.signInDisabled = false;
                // this.notification(data.message, data.variant);
                // this.$toast({
                //     component: ToastificationContent,
                //     props: {
                //         title: data.message,
                //         icon: 'EditIcon',
                //         variant: 'danger',
                //     },
                // })
            } else if (data.type == "success") {
                // this.signInDisabled = false;
                // this.notification(data.message, data.variant);
                // this.$toast({
                //     component: ToastificationContent,
                //     props: {
                //         title: data.message,
                //         icon: 'EditIcon',
                //         variant: 'success',
                //     },
                // })
                nuxtApp.$sendNotification('Login successfully. Please Wait...', 'top-right', 3000, 'success');
                localStorage.setItem('customerData', JSON.stringify(data.user))
                localStorage.setItem('customerToken', (data.token))
                localStorage.setItem('cartItemToken', (data.cartItemToken))
                // loginTracking();
                const cartItemToken = localStorage.getItem('cartItemToken')
                if (cartItemToken) {
                    localStorage.setItem('is_guest_token', cartItemToken)
                }
                // if (cartItemToken == 'null') {
                //     window.location.href = window.location.origin;
                // }
                // console.log(data);
                // return false;
                if(data.is_android_app == 'true') { 
                    loader.value = false
                    window.location.href = window.location.origin+'/mobile-app-homepage/'+data.token;
                    // this.$router.push({
                    //     name: 'home-mobile-app',
                    //     params: {slug :data.token}
                    // })
                } else {
                    
                    const lastRouteName = localStorage.getItem('lastUrl');
                    loader.value = false
                    $router.push({
                        name: lastRouteName ? lastRouteName : 'home'
                    }).catch((e) => {
                        console.log(e);
                    });
                }



        }else{
            loader.value = false
            nuxtApp.$sendNotification('Something went wrong, Please Try later...', 'top-right', 3000, 'error');
            console.log('error in something')
        }
        }
        catch (error){
            loader.value = false
            nuxtApp.$sendNotification('Something went wrong, Please Try later...', 'top-right', 3000, 'error');
            console.log('error: ', error)
        }
    }
    else{
        console.error(variefy)
    }
}


</script>
