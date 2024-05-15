<template>
    <div class="tp-header-category relative tp-category-menu tp-header-category-toggle">
      <button @click="handleActive" class="category-menu-btn after:content-[' right-28'] tp-category-menu-toggle">
        <span class="mr-2">
        <Icon name="material-symbols:menu" />
      </span>
        All Categories 
        <Icon name="material-symbols:arrow-drop-down-rounded" class="absolute right-5 top-6"/>
      </button>
      <Transition>
        <!-- Navigation bar -->
        <div class="">
        <nav v-if="isActive" class=" absolute w-full h-[600%] shadow-lg has-[:submenu]:overflow-visible z-50 no-scrollbar transition-all duration-3 ease-in-out overflow-auto bg-white ">
          <ul class="my-2 mx-3">
            <!-- Categories  -->
              <li  v-for="(item, i) in items.category" :key="i" class="group relative has-dropdown top-1/2 right-0 text-sm text-gray-600">
                <NuxtLink :to="`/product-category/${item.category_url}`" class="cursor-pointer relative flex gap-8 items-center pb-1 border-b-2">
                    <span v-if="item.image">
                        <img class="rounded-full w-16 h-16" :src="item.image" :alt="item.name">
                    </span>
                    <span class=" text-black text-2xl hover:text-primary ">
                      {{item.name }}
                    </span>
                    <Icon v-if="item.haveChildren" name="material-symbols:arrow-right-rounded" class="absolute right-5"/>
                  </NuxtLink>

                <!-- Sub Categories  -->
                <!-- <ul v-if="item.haveChildren" class="absolute submenu -right-48 rounded-md top-2 px-6 bg-white min-w-[200px] h-auto shadow-md z-50 hidden group-hover:block">
                  <li v-for="(child, i) in item.childData" :key="i" class="mx-auto my-4 border-b-2 last:border-b-0">
                      <NuxtLink class="cursor-pointer" :to="`/product-category/${item.category_url}/product-sub-category/${child.name}`">
                      <span class="">
                        {{ child.name }}
                      </span>
                      </NuxtLink>
                  </li>
                </ul> -->
            </li>
          </ul>
        </nav>
        <div v-for="(item, i) in items.category" :key="i"> 
          
        </div>
        </div>
      </Transition>
    </div>
  </template>
  
  <script setup>
  let isActive = ref(false);
  // handle active
  const handleActive = () => isActive.value = !isActive.value;

  const items = defineProps({
    category: Array
  })
 function handleHover(i) {

 }



</script>
  
  <style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }
  
  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
  </style>
  