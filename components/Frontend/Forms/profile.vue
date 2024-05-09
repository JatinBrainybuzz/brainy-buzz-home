<template>
    <form >
        <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="">
              <div class="profile__input-box">
                <div class="profile__input relative mb-6">
                    <input type="text" placeholder="Enter your username" class="profile__input1">
                    <span class=" absolute top-1/2 left-5 transform -translate-y-1/2">
                      <Icon name="ci:user-01"/>
                    </span>
                </div>
              </div>
            </div>
          
          <div class="">
              <div class="profile__input-box">
                <div class="profile__input relative mb-6">
                    <input type="email" placeholder="Enter your email" class="profile__input1">
                    <span class=" absolute top-1/2 left-5 transform -translate-y-1/2">
                        <Icon name="bx:mail-send" />                                        
                    </span>
                </div>
              </div>
          </div>
          <div class="">
              <div class="profile__input-box">
                <div class="profile__input relative mb-6">
                    <input type="text" placeholder="Enter username" class="profile__input1">
                    <span class=" absolute top-1/2 left-5 transform -translate-y-1/2">
                        <Icon name="ri:facebook-fill" />
                    </span>
                </div>
              </div>
          </div>
          <div class="">
              <div class="profile__input-box">
                <div class="profile__input relative mb-6">
                    <input type="text" placeholder="Enter username" class="profile__input1">
                    <span class=" absolute top-1/2 left-5 transform -translate-y-1/2"><Icon name="bi:twitter-x" />
                    </span>
                </div>
              </div>
          </div>
          <div class="">
              <div class="profile__input-box">
                <div class="profile__input relative mb-6">
                    <input type="text" placeholder="Enter your number" class="profile__input1">
                    <span class=" absolute top-1/2 left-5 transform -translate-y-1/2">
                      <Icon name="ic:round-smartphone" />                                                                                     
                    </span>
                </div>
              </div>
          </div>
          <div class="">
              <div class="profile__input-box">
                <div class="profile__input relative mb-6">
                    <USelect
                        color="white"
                        variant="none"
                        :options="[
                                { name: 'Rohan', value: 'Male', default: true },
                                { name: 'Female', value: 'Female'  },
                                {name: 'Others', value: 'Others' }
                            ]"
                        size="lg"
                        class="w-full rounded-none border"
                        v-model="country"                    />
                </div>
              </div>
          </div>
          <div class=" col-span-2">
              <div class="profile__input-box">
                <div class="profile__input relative mb-6">
                    <input type="text" placeholder="Enter your address" class="profile__input1" >
                    <span class=" absolute top-1/2 left-5 transform -translate-y-1/2">
                      <Icon name="mdi:map-marker-radius-outline" />
                    </span>
                </div>
              </div>
          </div>
  
          <div class=" col-span-2">
              <div class="profile__input-box">
                <div class="profile__input relative mb-6">
                    <textarea placeholder="Enter your bio" class="w-full h-52 leading-16 px-6 border border-gray-200 bg-white text-black"></textarea>
                </div>
              </div>
          </div>
          <div class= "col-span-1 mt-4 ml-2">
              <div class="profile__btn flex">
                <button type="submit" class="  px-5 py-2 bg-primary text-white text-wrap">Update Profile</button>
              </div>
          </div>
        </div>
    </form>
  </template>
  
  <script setup>
    const country = ref('')
// const handleSubmit = () => {
//   console.log('submitted');
// };
  </script>
  
  