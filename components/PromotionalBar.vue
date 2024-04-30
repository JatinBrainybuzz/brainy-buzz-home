<template>
    <div class="bg-primary text-white p-2 justify-between flex pr-32 ">
        <div>
            <span class="text-white">Promotional bar stuff</span>
        </div>
        
        <div class="flex gap-8">
        <!-- <Dropdown title="English" menu_item1="Hindi" menu_item2="Spanish" menu_item3="Russian" menu_item4="Franch"/>
        <Dropdown title="Setting" menu_item1="My Profile" menu_item2="WishList" menu_item3="Cart" menu_item4="Logout"/> -->
        <UDropdown :items="items" mode="hover" :popper="{ placement: 'bottom-start' }"  class="hidden md:block">
            <UButton label="Settings" class="hover:bg-primary shadow-none" trailing-icon="i-heroicons-chevron-down-20-solid" />
        </UDropdown> 
        <UDropdown :items="newItems" mode="hover" :popper="{ placement: 'bottom-start' }" class="hidden md:block">
            <UButton class="hover:bg-primary shadow-none" label="Language" trailing-icon="i-heroicons-chevron-down-20-solid" />
        </UDropdown> 
    </div>
    </div>
</template>

<script setup>
const items =  [
  [{
    label: 'Profile',
  }],
  [{
    label: 'Cart'
  }],
  [{
    label: 'Settings'
  }],
  [{
    label: 'Logout'
  }]
]
const newItems =  [
  [{
    label: 'Japanese',
  }],
  [{
    label: 'Spanish'
  }],
  [{
    label: 'English'
  }],
  [{
    label: 'Russian'
  }]
]


</script>

<style scoped>
</style>