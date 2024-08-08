<template>
    <section class="tp-cart-area pb-96">
      <div class="container">
        <!-- <div className='text-center pt-48'>
          <h3>No Cart Items Found</h3>
          <nuxt-link href="/" className="tp-cart-checkout-btn mt-20">Continue Shipping</nuxt-link>
        </div> -->
        <div class="grid grid-cols-1 lg:grid-cols-4 mt-20">
          <div class="lg:col-span-3">
              <div class=" overflow-auto no-scrollbar mb-25 mr-4">
                <table class="w-full">
                    <thead height="40" class="bg-gray-100 font-medium text-base text-black border-0">
                      <tr >
                        <th colspan="2" class="tp-cart-header-product  w-1/2 pl-8">Product</th>
                        <th class="tp-cart-header-price">Price</th>
                        <th class="tp-cart-header-quantity">Quantity</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <!-- cart item start -->
                         <FrontendCartItem />
                      <!-- <cart-item v-for="item in cartStore.cart_products" :key="item.id" :item="item" /> -->
                      <!-- cart item end -->
                    </tbody>
                  </table>
              </div>
              <div class="tp-cart-bottom ">
                <div class="grid grid-cols-1 md:grid-cols-3 items-end">
                    <div class=" col-span-2 mb-5">
                        <form>
                        <div class="flex-col pl-8 text-start py-4">
                            <label class="text-xs font-medium text-gray-500">Coupon Code:</label>
                            <div class="tp-cart-coupon-input flex align-items-center ">
                                <input type="text" placeholder="Enter Coupon Code" class="bg-white border pl-2 rounded border-gray-300 h-12 leading-12 mr-4 max-w-[282px]">
                                <button class="font-medium text-base text-white bg-primary px-2 rounded-md" type="submit">Apply</button>
                            </div>
                        </div>
                        </form>
                    </div>

                    <div class="col-xl-6 col-md-4">
                      <div class="tp-cart-update text-md-end">
                          <button type="button" class="tp-cart-update-btn font-medium text-base text-white bg-primary px-4 py-3 rounded-md">Clear Cart</button>
                      </div>
                    </div>
                </div>
              </div>
          </div>
          <div class=" col-span-1 px-5 bg-white shadow-md hover:shadow-xl ">
              <div class="tp-cart-checkout-wrapper p-3">
                <div class="text-base text-black font-medium pb-3 border-b border-gray-300 flex items-center justify-between">
                    <span>Subtotal</span>
                    <span >
                      120 $
                    </span>
                </div>
                <div class=" pb-6 border-b border-gray-300 mb-15 mt-3">
                    <h4 class="font-medium text-base mb-4 text-start pl-6">Shipping</h4>
                    <div class="">
                      <div class="font-normal text-base text-gray-800 relative pl-6 gap-2 flex mb-5">
                          <input id="flat_rate" type="radio" name="shipping">
                          <label for="flat_rate" class="hover:cursor-pointer">Flat rate: <span class="ml-2 text-primary font-medium">$20.00</span></label>
                      </div>
                      <div class="tp-cart-checkout-shipping-option pl-6 gap-2 flex mb-5">
                          <input id="local_pickup" type="radio" name="shipping">
                          <label for="local_pickup" class="hover:cursor-pointer">Local pickup: <span class="ml-2 text-primary font-medium"> $25.00</span></label>
                      </div>
                      <div class="tp-cart-checkout-shipping-option pl-6 gap-2 flex mb-5">
                          <input id="free_shipping" type="radio" name="shipping">
                          <label for="free_shipping" class="hover:cursor-pointer">Free shipping</label>
                      </div>
                    </div>
                </div>
                <div class="tp-cart-checkout-total mb-6 mt-2 text-base font-medium flex items-center justify-between">
                    <span>Total</span>
                    <span>$ 120</span>
                </div>
                <div class="tp-cart-checkout-proceed">
                    <nuxt-link href="/" class="tp-cart-checkout-btn font-medium text-base rounded-lg text-white bg-primary inline-block px-4 py-4 w-full">Proceed to Checkout</nuxt-link>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>

  const data = async ()=>{
    const response = await useLazyFetch(config.public.appUrl + '/api/customer/admin/cart/get')
  }

  </script>
  