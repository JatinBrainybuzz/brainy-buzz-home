<template>
    <div class="flex justify-center lg:m-20 md:m-12 sm:m-5 m-2">
        
    </div>
</template>
<script setup>
const otp = ref('')
const config = useRuntimeConfig();
const props = defineProps({
    form: Object
})

const submitForm = () => {

        const data = $fetch(config.public.appUrl+"api/register", {
            method: 'post',
            body: {
                OTP: otp,
                form: form
            }
        }
    )
}
</script>