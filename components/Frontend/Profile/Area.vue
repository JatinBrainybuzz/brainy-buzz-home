<template>
    <section class="profile__area pt-32 pb-32">
        <div class="container">
          <div class="profile__inner relative">
              <div class="grid grid-cols-1 lg:grid-cols-3">
                <div class="">
                    <div class=" mx-11 mt-8 shadow-2xl">
                      <!-- profile nav start -->
                        <FrontendProfileNav  @activeTab="handleTabClick"/>
                      <!-- profile nav end -->
                    </div>
                </div>
                <div class="lg:col-span-2">
                    <div class="bg-white shadow-lg p-10">
                      <div class="tab-content " id="profile-tabContent">
                          <div class="tab-pane transition-1"
                          :class="{ 'activeTab': activeTab === 0 }"
                          >
                                <FrontendProfileMain />
                          </div>
                          <div class="tab-pane transition-1" 
                          :class="{ 'activeTab': activeTab === 1 }">
                            <!-- <profile-info/> -->
                            <FrontendProfileInfo />
                          </div>
                          <div class="tab-pane transition-1"
                          :class="{ 'activeTab': activeTab === 2 }" >
                            <!-- <profile-password/> -->
                            thing
                          </div>
                          <div class="tab-pane transition-1" 
                          :class="{ 'activeTab': activeTab === 3 }">
                            <!-- <profile-address/> -->
                            what
                          </div>
                          <div class="tab-pane transition-1" 
                          :class="{ 'activeTab': activeTab === 4 }">
                            <!-- <profile-orders/> -->
                            yoyo
                          </div>
                          <div class="tab-pane transition-1"
                          :class="{ 'activeTab': activeTab === 5 }">
                            <!-- <profile-notification/> -->
                            lala
                          </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </section>
  </template>
  
  <script setup>
  const activeTab = ref(0);

function handleTabClick(index) {
  activeTab.value = index;
}
  </script>
  