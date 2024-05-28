<template>
    <div class=" px-2 xl:px-16">
        <!-- breadcrumb area start -->
    <section class="breadcrumb__area bg-center bg-cover bg-no-repeat pt-[95px] pb-[50px]">
      <div class="container">
          <div class="grid grid-cols-1 text-start xl:ml-12 ml-2">
            <div>
                <div class="relative z-[1]">
                  <h3 class="font-medium text-4xl leading-none mb-6">Track your order</h3>
                  <div class="breadcrumb__list">
                      <span><nuxt-link href="/">Home</nuxt-link></span>
                      <span>Track your order</span>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </section>
    <!-- breadcrumb area end -->
    <section class=" mb-20">
        <div class="container">
            <div class="grid grid-cols-1 lg:grid-cols-2 shadow-lg">
                <div class=" bg-violet-800 text-white pb-10">
                    <div class="px-10 lg:px-22">
                    <div class="mt-16 mb-8 border rounded-full inline-block p-9">
                        <Icon name="streamline:gift-2" size="5rem" />
                    </div>
                    <div class=" text-3xl font-semibold my-2">
                        <span>Your Order Is Confirmed</span>
                    </div>
                    <div class="max-w-[50ch] text-base leading-6 tracking-wider inline-block mb-6">
                        <p>We will send you a shipping confirmation email as soon as your order ships</p>
                    </div>
                    <div class="grid grid-cols-1 lg:grid-cols-2 mb-6">
                        <div class="">
                            <div class="text-base text-start">
                                Order Date:
                            </div>
                            <div class="text-lg  text-start">
                                May 23, 2024
                            </div>
                        </div>
                        <div>
                            <div class="text-base">
                                Expected Delivery:
                            </div>
                            <div class="text-lg">
                                June 14, 2024
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 lg:grid-cols-2">
                        <div class="">
                            <div class="text-base  text-start">
                                Order Number:
                            </div>
                            <div class="text-lg  text-start">
                                #9641
                            </div>
                        </div>
                        <div>
                            <div class="text-base">
                                Payment Method:
                            </div>
                            <div class="text-lg">
                                Credit Card
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <!-- table section start -->
                <div class="pb-10">
                <div class="px-1 lg:px-20 mt-10">
                    <div class="text-start text-3xl font-semibold mb-8">
                        Order Details
                    </div>
                    <div class="flex justify-between border-b mb-6 pb-3">
                        <div class="font-semibold">
                            Product
                        </div>
                        <div class="font-semibold">
                            Total
                        </div>
                    </div>
                    <div class="flex justify-between border-b mb-6 pb-3">
                        <div>
                            Xiaomi Redmi Note 9 Global V. x 2
                        </div>
                        <div>
                            $274:00
                        </div>
                    </div>
                    <div class="flex justify-between border-b mb-6 pb-3">
                        <div>
                            Office Chair Multifun x 1
                        </div>
                        <div>
                            $74:00
                        </div>
                    </div>
                    <div class="flex justify-between border-b mb-6 pb-3">
                        <div>
                            Apple Watch Series 6 Stainless x 3
                        </div>
                        <div>
                            $362:00
                        </div>
                    </div>
                    <div class="flex justify-between border-b mb-6 pb-3">
                        <div>
                            Body Works Mens Collection x 1
                        </div>
                        <div>
                            $145:00
                        </div>
                    </div>
                    <div class="flex justify-between border-b mb-6 pb-3">
                        <div>
                            Subtotal
                        </div>
                        <div class="text-primary">
                            $507.00
                        </div>
                    </div>
                    <div class="flex justify-between mb-6 pb-3">
                        <div class="font-semibold">
                            Total
                        </div>
                        <div class="font-semibold">
                            $ 64,000
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>