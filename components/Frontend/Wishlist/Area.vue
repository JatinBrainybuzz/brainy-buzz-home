<template>
    <div class=" mt-8">
        <div class="container mb-32">
            <div class="lg:col-span-3">
                <div class=" overflow-auto no-scrollbar mb-25 mr-4">
                <table class="w-full table-auto border-separate border-spacing-y-6">
                    <thead height="40" class="bg-gray-100  text-base ">
                      <tr class="">
                        <th class=" w-[40%]">Product</th>
                        <th class=" w-[15%]">Price</th>
                        <th class=" w-[15%]">Add Cart</th>
                        <th class=" w-[30%]">Action</th>
                      </tr>
                    </thead>
                    <tbody >
                      <!-- Wishlist item start -->
                      <FrontendWishlistItem />
                    </tbody>
                </table>
                </div>
            </div>
            <div class="mt-16 flex ml-24">
                <NuxtLink :to="{name: 'cart'}" >
                    <span class="btn px-6 text-xl hover:scale-110">
                        Go To Cart
                    </span>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
