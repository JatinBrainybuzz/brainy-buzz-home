<template>
    <div class="container flex gap-28 my-10 overflow-hidden">
        <div v-for="category in categories.parent_category" class="flex items-center">
            <div class="flex justify-center items-center">
                <UAvatar
                size="4xl"
                    :src="category.image"
                    class="flex w-32 h-32"
                />
                
            </div>
            <!-- <div>
                    {{ category.name }}
            </div> -->
        </div>
    </div>
</template>
<!-- <template>
    <section class="tp-product-category pt-60 pb-15">
      <div class="container">
        <div class="row row-cols-xl-5 row-cols-lg-5 row-cols-md-4">
          <div v-for="(item, i) in categories.parent_category" :key="i" class="col">
            <div class="tp-product-category-item text-center mb-40">
              <div class="tp-product-category-thumb fix">
                <a class="cursor-pointer" @click="handleParentCategory(item.parent)">
                  <img :src="item.image" alt="product-category" />
                </a>
              </div>
              <div class="tp-product-category-content">
                <h3 class="tp-product-category-title">
                  <a class="cursor-pointer" @click="handleParentCategory(item.parent)">
                    {{ item.name }}
                  </a>
                </h3>
                <p>{{ item.products.length }} Product</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template> -->

<script setup>
const categories = defineProps({
    parent_category: Array  
    })
//  console.log(categories.parent_category)
// const router = useRouter();
// const handleParentCategory = (value:string) => {
//   const newCategory = value.toLowerCase().replace("&", "").split(" ").join("-");
//   router.push(`/about`);
// }
</script>

<style scoped>

</style>