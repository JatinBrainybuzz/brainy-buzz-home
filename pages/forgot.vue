<template>
    <div>
        <!-- breadcrumb start -->
        <FrontendLogin1Breadcrumb title="Forgot Password" subtitle="Reset Password" :center="true" />
        <!-- forgot area start -->
        <FrontendForgotArea />
        <!-- forgot area end -->
    </div>
  </template>
  
  <script setup lang="ts">
  useSeoMeta({ title: "Forgot Page" });
  </script>
  