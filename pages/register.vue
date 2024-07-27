<template>
    <div>
        <!-- <FrontendLoginBreadcrumb title="Register Now" subtitle="Register" :center="true" /> -->
        <!-- <FrontendLoginRegisterArea /> -->
        <FrontendLoginRegisterNextStep />
    </div>
  </template>
  
  <script setup >
  const valid = ref(false)
  function registered(){
    valid.value = true
  }
  </script>
  