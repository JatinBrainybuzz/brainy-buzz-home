<template>
    <section class="tp-login-area pb-36 relative z-[1]">
      <div class="tp-login-shape">
        <img class="tp-login-shape-1 absolute -z-[1] top-[7%] left-[18%] xl:left-[12%] lg:left-[4%]" src="/img/login/login-shape-1.png" alt="shape" />
        <img class="tp-login-shape-2 -z-[1] hidden lg:block absolute bottom-[38%] left-[26%] xl:left-[20%] lg-left-[20%]" src="/img/login/login-shape-2.png" alt="shape" />
        <img class="tp-login-shape-3 -z-[1] absolute top-[7%] right-[22%] xl:right-[15%] lg:right-[10%]" src="/img/login/login-shape-3.png" alt="shape" />
        <img class="tp-login-shape-4 -z-[1] hidden lg:block absolute bottom-[27%] right-[20%] xl:right-[3%] 2xl:right-[5%] lg:right-[1%]" src="/img/login/login-shape-4.png" alt="shape" />
      </div>
      <div class="container">
        <div class="flex justify-center">
          <div class=" lg:w-[60%] xl:w-1/2 w-full">
            <div class="shadow-lg py-5 px-5 md:px-10 bg-white">
              <div class="tp-login-top text-center mb-8">
                <h3 class="font-medium text-3xl mb-1"> <span class="text-primary"> Login</span> to BrainyBuzz</h3>
                <p class=" text-gray-400">
                  Don’t have an account?
                  <span class="hover:text-primary text-gray-600">
                    <nuxt-link href="/register" class=" transition duration-300">Create a free account
                  </nuxt-link></span>
                </p>
              </div>
              <div class="mb-2">
                <!-- social login start -->
                <!-- social login end -->
                <div class=" login-mail relative z-[1] text-center mb-10">
                  <p class="text-sm mb-0 px-3 relative inline-block -top-1 bg-white text-primary-400"> Sign In with Email </p>
                </div>
                <!-- form start -->
                <FrontendFormsLogin />
                <!-- form end -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  </script>
  