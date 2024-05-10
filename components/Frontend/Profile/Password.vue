<template>
    <div class="profile__password">
        <form>
          <div class="grid grid-cols-2 gap-2">
              <div class=" col-span-2">
                <div class="profile-input-box w-full">
                    <div class="profileInputArea">
                      <input name="old_pass" id="old_pass" type="password" class="h-full">
                    </div>
                    <div class="profile-input-title">
                      <label for="old_pass">Old Password</label>
                    </div>
                </div>
              </div>
              <div class="col-span-2 md:col-span-1 w-full">
                <div class="profile-input-box">
                    <div class="profileInputArea">
                      <input name="new_pass" id="new_pass" type="password" class=" h-full">
                    </div>
                    <div class="profile-input-title">
                      <label for="new_pass">New Password</label>
                    </div>
                </div>
              </div>
              <div class="col-span-2 md:col-span-1 w-full">
                <div class="profile-input-box">
                    <div class="profileInputArea">
                      <input name="con_new_pass" id="con_new_pass" type="password" class=" h-full">
                    </div>
                    <div class="profile-input-title">
                      <label for="con_new_pass">Confirm Password</label>
                    </div>
                </div>
              </div>
              <div class="col-span-1 w-full">
                <div class="flex">
                    <button type="submit" class="px-5 py-3 bg-primary text-white ">Update</button>
                </div>
              </div>
          </div>
        </form>
    </div>
  </template>
  
  <script setup>
  
  </script>
  