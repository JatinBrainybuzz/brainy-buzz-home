<template>
    <section class="forgot-area pb-36 relative z-[1]">
      <div class="forgot-shape">
        <img class="forgot-shape-1 absolute -z-[1] top-[7%] left-[18%] xl:left-[12%] lg:left-[4%]" src="/img/login/login-shape-1.png" alt="shape" />
        <img class="forgot-shape-2 -z-[1] hidden lg:block absolute bottom-[38%] left-[26%] xl:left-[20%] lg-left-[20%]" src="/img/login/login-shape-2.png" alt="shape" />
        <img class="forgot-shape-3 -z-[1] absolute -top-[10%] right-[22%] xl:right-[15%] lg:right-[10%]" src="/img/login/login-shape-3.png" alt="shape" />
        <img class="forgot-shape-4 -z-[1] hidden lg:block absolute bottom-[27%] right-[20%] xl:right-[3%] 2xl:right-[5%] lg:right-[1%]" src="/img/login/login-shape-4.png" alt="shape" />
      </div>

      <div class="container">
        <div class="flex justify-center">
          <div class=" lg:w-[60%] xl:w-1/2 w-full">
            <div class="shadow-lg py-5 px-6 md:px-14 bg-white">
              <div class="">
                <h2 class="text-2xl font-medium">Reset Password</h2>
              </div>
              <div class="mb-8">
                <span class=" text-gray-500 text-sm">Enter Your Mobile Number to to request password reset.</span>
              </div>
            <div class="relative mb-5">
              <div class="h-14 bg-white border border-gray-300 text-base text-black">
                <input
                  id="Number"
                  type="text"
                  placeholder="Enter your Phone Number ..."
                  class=" w-full h-full px-2"
                />
              </div>
              <div class=" bg-white absolute -top-4 left-2 px-1 inline-block text-base text-black-title">
                <label for="email">Phone Number</label>
              </div>
            </div>
            <div class="mb-2">
              <button type="submit" class=" w-full py-3 bg-black text-xl
                  transition ease-in-out text-white rounded hover:bg-primary">Reset Password</button>
            </div>
            <div class=" text-gray-600">
              <span class="flex justify-center items-center gap-3">
                Remember Password?
                <div class="group">
                  <NuxtLink :to="{name: 'login' }" class="text-primary">
                    Login
                    <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary-500"></span>
                  </NuxtLink>
                </div>
              </span>
            </div>
            </div>
          </div>
        </div>
      </div>

    </section>
</template>

<script setup>

</script>

<style scoped>

</style>