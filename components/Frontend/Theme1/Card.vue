<template>
    <div :class="` my-16 mx-5 group bg-white border rounded-lg border-gray-300 hover:shadow-lg hover:border-white hover:border transition-1`">
      <div class="max-w-full border-gray-400 border-b rounded-t-lg md:w-auto relative overflow-hidden ">
        <nuxt-link :to="{ name: 'product-details-id', params: {category: item.category, slug: item.slug } }">
          <img :src="item.image" alt="Product" class="group-hover:transform group-hover:scale-110 group-hover:transition-1" />
        </nuxt-link>
  
        <!-- product badge -->
        <div class="product-badge">
          <span v-if="item.product_inventory == '0'" class="bg-pink-600">out-of-stock</span>
        </div>
  
        <!-- product action -->
        <div class="product-action group-hover:transition-2 group-hover:visible group-hover:opacity-100 group-hover:-translate-x-2
         group-hover:-translate-y-1">
          <div class="shadow-sm flex flex-col rounded-full">
            <button
              v-if="!item.isInCart"
              @click="addToCart"
              type="button"
              class="product-action-btn rounded-t-md"
            >
            <!-- ${
                isItemInCart(item) ? 'active' : ''
              } -->
              
              <UTooltip text="Add to Cart" :popper="{ placement: 'left'}" >
                <ClientOnly>
                  <Icon name="material-symbols:shopping-cart-outline" />
                </ClientOnly>
            </UTooltip>
              <!-- <span class="tp-product-tooltip">Add to Cart</span> -->
            </button>
            <nuxt-link
              v-if="item.isInCart"
              href="/cart"
              :class="`product-action-btn tp-product-add-cart-btn `"
            >
            <!-- ${isItemInCart(item)? 'active': ''} -->
            <UTooltip text="Add to Cart" :popper="{ placement: 'left' }" class="product-tooltip">
              <ClientOnly>
                <Icon name="material-symbols:shopping-cart-outline" />
              </ClientOnly>  
            </UTooltip>
            </nuxt-link>
  
            <button
              type="button"
              class="product-action-btn tp-product-quick-view-btn"
            > 
           
            <UTooltip text="Quick View" :popper="{ placement: 'left' }" class="product-tooltip">
              <ClientOnly>
                <Icon name="ph:eye-bold" />
              </ClientOnly>  
            </UTooltip>
            </button>
            <button type="button" :class="`product-action-btn  tp-product-add-to-wishlist-btn `" @click="">
              <UTooltip text="Add To Wishlist" :popper="{ placement: 'left' }" class="product-tooltip">
                <ClientOnly>
                  <Icon name="solar:heart-angle-outline"  />
                </ClientOnly>
            </UTooltip>
            </button>
            <button type="button" class="product-action-btn  rounded-b-md " >
              <UTooltip text="Book on Whatsapp" :popper="{ placement: 'left' }">
                <ClientOnly>
                  <Icon name="nimbus:whatsapp" />
                </ClientOnly>
            </UTooltip>

            </button>
          </div>
        </div>
      </div>
      <!-- product content -->
      <div class=" md:px-8 px-8 py-20 md:py-8">
        <!-- tp-product-category -->
        <div class=" leading-none mb-3 text-left text-opacity-70 text-sm font-medium hover:text-primary">
          <nuxt-link :href="`/product-category/${item.category}`">{{ item.category }}</nuxt-link>
        </div>
        <div class="h-20">
          <h3 class="hover:text-primary mb-5 font-medium text-base leading-tight text-left text-clip">
            <nuxt-link :to="{ name: 'product-details-id', params: {category: item.category, slug: item.slug } }">
              {{ item.name }}
            </nuxt-link>
          </h3>
        </div>
        <div class=" leading-none mb-3 md:mb-7 flex items-center">
          <div class="tp-product-rating-icon  text-yellow-800 mr-2 flex items-center">
            <span>
              <ClientOnly>
                <Icon name="material-symbols:kid-star" size="1.1rem" color="yellow" />
              </ClientOnly>
            </span>
            <span>
              <ClientOnly>
                <Icon name="material-symbols:kid-star" size="1.1rem" color="yellow" />
              </ClientOnly>
            </span>
            <span>
              <ClientOnly>
                <Icon name="material-symbols:kid-star" size="1.1rem" color="yellow" />
              </ClientOnly>
            </span>
            <span>
              <ClientOnly>
                <Icon name="material-symbols:kid-star" size="1.1rem" color="yellow" />
              </ClientOnly>
            </span>
            <span>
              <ClientOnly>
                <Icon name="uis:star-half-alt" size="1.2rem" color="yellow" />
              </ClientOnly>
            </span>
          </div>
          <div class="font-medium text-sm">
            <span>(4 Review)</span>
          </div>
        </div>
        <div class="mb-5">
          <div v-if="item.special_price" class=" font-bold text-base tracking-tight text-left">
            <span class=" text-gray-700 text-sm line-through font-medium">Rs {{ item.price }}</span>
            <span class=" text-primary md:text-35">
              Rs {{parseFloat(item.special_price).toFixed(2)}}
            </span>
          </div>
          <span v-else class="text-black md:text-35">Rs {{ item.price }}</span>
        </div>
  
        <!-- <div class="tp-product-countdown" v-if="offer_style">
          <div class="tp-product-countdown-inner">
            <ul>
              <li>
                <span>{{ timer.days }}</span> Day
              </li>
              <li>
                <span>{{ timer.hours }}</span> Hrs
              </li>
              <li>
                <span>{{ timer.minutes }}</span> Min
              </li>
              <li>
                <span>{{ timer.seconds }}</span> Sec
              </li>
            </ul>
          </div>
        </div> -->
      </div>
    </div>
  </template>
  
  <script setup>
  import { useTimer } from "vue-timer-hook";
  
  const cartStore = useCartStore()
  const props = defineProps({
    item: Object,
    // // offer_style: {
    // //   type: Boolean,
    //   // default: undefined // To make it optional
    // }
  });
  function addToCart(productID){
    try {
        cartStore.addCart(productID)
        const sg = cartStore.getCart.find((item) => item.productId === productID);
        console.log('this is result:',sg)
      }
      catch(error){
        console.log('something error: ', error)
      }
  }
    



  // let timer;
  // if (props.item.offerDate) {
  //   const endTime = new Date(props.item.offerDate.endDate);
  //   const endTimeMs = endTime.getTime();
  //   timer = useTimer(endTimeMs);
  // }
  </script>
  