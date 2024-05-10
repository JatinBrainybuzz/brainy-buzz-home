<template>
    <section class="profile__area md:pt-16 lg:pt-24 md:pb-18 lg:pb-24">
        <div class="container px-2 md:px-14 xl:px-20 pb-16">
          <div class="profile__inner relative">
              <div class="grid grid-cols-1 lg:grid-cols-3">
                <div class="">
                    <div class=" mx-2 md:mx-11 md:mt-8 mt-2 shadow-2xl">
                      <!-- profile nav start -->
                        <FrontendProfileNav  @activeTab="handleTabClick"/>
                      <!-- profile nav end -->
                    </div>
                </div>
                <div class="lg:col-span-2">
                    <div class="bg-white shadow-lg p-2 md:p-10 md:mr-6">
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
                            <FrontendProfileAddress />
                          </div>
                          <div class="tab-pane transition-1" 
                          :class="{ 'activeTab': activeTab === 3 }">
                            <!-- <profile-address/> -->
                              <FrontendProfileOrder />
                          </div>
                          <div class="tab-pane transition-1" 
                          :class="{ 'activeTab': activeTab === 4 }">
                            <FrontendProfileNotification />

                          </div>
                          <div class="tab-pane transition-1"
                          :class="{ 'activeTab': activeTab === 5 }">
                            <!-- <profile-notification/> -->
                              <FrontendProfilePassword />
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
  