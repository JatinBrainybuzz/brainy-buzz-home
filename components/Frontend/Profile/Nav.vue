<template>
    <nav>
      <div class="flex-cols text-left w-full mb-8 tp-tab-menu gap-11" id="profile-tab" role="tablist">
        <div
          class="nav-link"
          :class="{active: selectedTab == 0}"
          @click="selectTab(0)"
        >
        <!-- @click="$emit('activeTab', 0)" -->
          <span class="mr-3 ">
            <Icon name="material-symbols:person-edit" />
          </span>Profile
        </div>
        <div
          class="nav-link"
          :class="{active: selectedTab == 1}"
          @click="selectTab(1)"
        >
          <span class="mr-3 "><Icon name="ri:information-2-line" /></span> Information
        </div>
        <div
          class="nav-link"
          :class="{active: selectedTab == 2}"
          @click="selectTab(2)"
        >
          <span class="mr-3 "><Icon name="material-symbols:add-location-alt-rounded" /></span> Address
        </div>
        <div
          class="nav-link"
          :class="{active: selectedTab == 3}"
          @click="selectTab(3)"
        >
          <span class="mr-3 "><Icon name="material-symbols:order-approve-sharp" /></span> My Orders
        </div>
        <div
          class="nav-link"
          :class="{active: selectedTab == 4}"
          @click="selectTab(4)"
        >
          <span class="mr-3 "><Icon name="material-symbols:notifications-active-rounded" /></span> Notification
        </div>
        <div
        class="nav-link"
        :class="{active: selectedTab == 5}"
          @click="selectTab(5)"
        >
          <span class="mr-3 "><Icon name="material-symbols:shield-lock-rounded" /></span> Change Password
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  const selectedTab = ref(0)
  const emit = defineEmits(['activeTab']);
   const selectTab = (index)=> {
      selectedTab.value = index;
      emit('activeTab', index);
    }

</script>
  