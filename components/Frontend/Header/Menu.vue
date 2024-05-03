<template>
    <div >
        <div>
        <div>
            <ul class="flex justify-center items-center gap-8 ml-4">
                <li v-for="(item,i) in limitedItems" :key="i" class="group mr-4">
                  <NuxtLink :to="`product-category/${item.name}`">
                    <span class=" text-center text-base font-normal hover:text-primary">
                        {{item.name}}
                    </span>
                    <Icon v-if="item.haveChildren" name="material-symbols:arrow-drop-down-rounded" class="absolute top-9 left-100 mr-1"/>
                 </NuxtLink>
                  <ul v-if="item.haveChildren" class="hidden group-hover:block absolute min-w-[300px] h-auto z-20 bg-white rounded-b-md top-18 pt-6">
                    <li v-for="(child,i) in item.childData" :key="i" 
                    class=" border-b-2 border-gray-200 last:mb-5 hover:border-b-primary text-base font-normal px-4 py-4" >
                        <NuxtLink :to="`product-category/${item.name}/product-sub-category/${child.name}`" class="hover:text-primary">
                            {{ child.name }}
                            </NuxtLink>

                            <!-- This not works but in case if you need sub category -> sub category  -->
                        <ul v-if="child.haveChildren" class="hidden group-hover:block absolute min-w-[300px] h-auto z-20 bg-white rounded-b-md top-18 pt-6">
                                <li v-for="(baby,i) in child.childData" :key="i" 
                                class=" border-b-2 border-gray-200 last:mb-5 hover:border-b-primary text-base font-normal px-4 py-4" >
                                    <NuxtLink :to="`product-category/${item.name}/product-sub-category/${child.name}/${baby.name}`" class="hover:text-primary">
                                        {{ baby.name }}
                                        </NuxtLink>
                                </li>
                            </ul>
                    </li>
                  </ul>
                </li>
              </ul>
        </div>
        </div>
    </div>
</template>

<script setup>
 const items = defineProps({
    category: Array
  })

  const limitedItems = items.category.slice(0, 6);
  console.log(limitedItems)
</script>

<style scoped>

</style>