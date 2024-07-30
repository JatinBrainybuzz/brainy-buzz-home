<template>
    <div>
        <!-- <FrontendLoginBreadcrumb title="Register Now" subtitle="Register" :center="true" /> -->
        <FrontendLoginRegisterArea v-if="!valid" @formSubmitted="registered"/>
        <FrontendLoginRegisterNextStep v-if="valid" />
    </div>
  </template>
  
  <script setup >
  const valid = ref(false)
  function registered(){
    valid.value = true
  }
  </script>
  