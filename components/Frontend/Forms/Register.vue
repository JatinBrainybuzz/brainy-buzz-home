<template>
    <form>
      <div class=" mb-3">
        <div class="relative mb-8">
          <div class="h-14 bg-white border border-gray-300 text-base text-black">
            <input
              id="Name"
              type="text"
              placeholder="Enter Your Name .."
              class=" w-full h-full px-2"
            />
          </div>
          <div class=" bg-white absolute -top-3 left-2 px-1 inline-block text-base text-black-title">
            <label for="Name">Your Name</label>
          </div>
        </div>

        <div class="relative mb-8">
          <div class="h-14 bg-white border border-gray-300 text-base text-black">
            <input
              id="email"
              type="email"
              placeholder="Brainybuzz@mail.com"
              class=" w-full h-full px-2"
            />
          </div>
          <div class=" bg-white absolute -top-3 left-2 px-1 inline-block text-base text-black-title">
            <label for="email">Your Email</label>
          </div>
        </div>
        <div class="relative mb-8">
          <div class="relative">
            <div class="h-14 bg-white border border-gray-300 text-base text-black">
              <input
                id="tp_password"
                :type="showPass ? 'text' : 'password'"
                name="password"
                placeholder="Min. 6 character"
                class="w-full h-full px-2"
              />
            </div>
            <div class="absolute right-4 top-7 transform -translate-y-1/2" id="password-show-toggle">
              <span class="open-eye" @click="togglePasswordVisibility">
                <template v-if="showPass">
                  <Icon name="iconoir:eye" />
                </template>
                <template v-else>
                  <Icon name="iconoir:eye-closed" />
                </template>
              </span>
            </div>
            <div class=" absolute bg-white -top-4 left-2 px-2">
              <label for="tp_password">Password</label>
            </div>
          </div>
          
        </div>
      </div>
      <div class="tp-login-bottom">
        <button type="submit" class="tp-login-btn w-full py-2 bg-black text-xl transition ease-in-out text-white rounded hover:bg-primary">Register</button>
      </div>
    </form>
  </template>
  
  <script setup>
  const showPass = ref(false)
  const togglePasswordVisibility = () => {
  showPass.value = !showPass.value;
};
  </script>
  